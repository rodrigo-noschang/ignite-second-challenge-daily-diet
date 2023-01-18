import { ActivityIndicator, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { FoodOverviewContainer, ButtonsContainer } from './styles';

import ReturnHeader from '@components/ReturnHeader';
import FoodData from '@components/FoodData';
import { mealsGetById } from '@storage/Meals/mealsGetById';
import { MealType } from '@screens/Home';
import ActionButton from '@components/ActionButton';

import { mealsDeleteById } from '@storage/Meals/mealsDeleteById';

type RouteParams = {
    foodId: number,
    date: string
}

const FoodOverview = () => {
    const route = useRoute();
    const [food, setFood] = useState<MealType>();
    const { foodId, date } = route.params as RouteParams;

    const handleDeleteFood = () => {
        Alert.alert('', 'Deseja realmente excluir o registro da refeição?', 
        [
            {
                text: 'Sim',
                onPress: () => mealsDeleteById(foodId, date)
            },
            {
                text: 'Não'
            }
        ])

        mealsDeleteById(foodId, date);
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
                    />
                    <ActionButton 
                        title = 'Excluir refeição'
                        buttonType = 'LIGHT'
                        iconName = 'delete'
                        onPress = {handleDeleteFood}
                    />
                </ButtonsContainer>
            </FoodOverviewContainer>
        :
            <ActivityIndicator />
    )
}

export default FoodOverview;