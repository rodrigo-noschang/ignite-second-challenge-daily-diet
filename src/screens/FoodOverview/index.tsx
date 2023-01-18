import { ActivityIndicator, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { FoodOverviewContainer, ButtonsContainer } from './styles';

import ReturnHeader from '@components/ReturnHeader';
import FoodData from '@components/FoodData';
import { mealsGetById } from '@storage/Meals/mealsGetById';
import { MealType } from '@screens/Home';
import ActionButton from '@components/ActionButton';
import PersonalAlert from '@components/PersonalAlert';

import { mealsDeleteById } from '@storage/Meals/mealsDeleteById';

type RouteParams = {
    foodId: number,
    date: string
}

const FoodOverview = () => {
    const [food, setFood] = useState<MealType>();
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigation();
    
    const route = useRoute();
    const { foodId, date } = route.params as RouteParams;

    const showPersonalAlert = () => {
        setShowAlert(true)
    }

    const hidePersonalAlert = () => {
        setShowAlert(false)
    }

    const handleDeleteFood = async () => {
        await mealsDeleteById(foodId, date);
        hidePersonalAlert();
        navigate.navigate('home');
    }

    const handleEditFood = () => {
        navigate.navigate('editFood', {foodId, date});
    }

    const fetchFood = async () => {
        const foodData = await mealsGetById(foodId, date);
        setFood(foodData);
    }
    
    useFocusEffect(useCallback(() => {
        fetchFood();
    }, []))

    return (
        food ?
            <FoodOverviewContainer inDiet = {food.isInDiet}>
                <ReturnHeader text = 'Refeição'/>
                <FoodData food = {food} date = {date}/>

                <ButtonsContainer>
                    <ActionButton 
                        title = 'Editar refeição'
                        buttonType = 'DARK'
                        iconName = 'edit'
                        onPress = {handleEditFood}
                    />
                    <ActionButton 
                        title = 'Excluir refeição'
                        buttonType = 'LIGHT'
                        iconName = 'delete'
                        onPress = {showPersonalAlert}
                    />
                </ButtonsContainer>

            { showAlert &&    
                <PersonalAlert 
                    cancelFunction = {hidePersonalAlert}
                    confirmFunction = {handleDeleteFood}
                />
            }
            </FoodOverviewContainer>
        :
            <ActivityIndicator />
    )
}

export default FoodOverview;