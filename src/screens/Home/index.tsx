import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { HomeContainer, MealsText, MealsListContainer } from './styles';

import ProfileHeader from '@components/ProfileHeader';
import DietOverall from '@components/DietOverall';
import ActionButton from '@components/ActionButton';
import DayMeal from '@components/DayMeal';

import { mealsGetAll } from '@storage/Meals/mealsGetAll';

export type MealType = {
    id: number,
    name: string,
    description: string,
    time: string,
    isInDiet: boolean
}

export type DailyMealsType = {
    date: string,
    mealsOfTheDay: MealType[]
}

const Home = () => {
    const [inDietMealsPercentage, setInDietMealsPercentage] = useState('');
    const [mealsOnly, setMealsOnly] = useState<MealType[]>([]);
    const [dailyMealsState, setDailyMealsState] = useState<DailyMealsType[]>([]);
    const navigation = useNavigation();

    const handleNavigateToStatistics = () => {
        navigation.navigate('statistics', {
            meals: mealsOnly,
            mealsInDietPercentage: inDietMealsPercentage
        })
    }

    const handleNavigateToNealMeal = () => {
        navigation.navigate('newMeal');
    }

    const fetchMeals = async () => {
        try {
            const dailyMeals = await mealsGetAll();

            const allMealsOnly = dailyMeals.map(dailyMeal => dailyMeal.mealsOfTheDay).flat();
            const inDietMeals = allMealsOnly.filter(meal => meal.isInDiet);
            
            const inDietRatio = allMealsOnly.length > 0 ? 
                ((inDietMeals.length / allMealsOnly.length) * 100).toFixed(2).replace('.', ',')
                : '0';
            
            setMealsOnly(allMealsOnly);
            setInDietMealsPercentage(inDietRatio);
            setDailyMealsState(dailyMeals);
        } catch (error) {
            throw Error('Não foi possível acessar as refeições');
        }
    }

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []))

    return (
        <HomeContainer>  
            <ProfileHeader /> 
            <DietOverall 
                inDietMealsPercentage = {inDietMealsPercentage}
                onNavigate = {handleNavigateToStatistics}    
            />

            <MealsText> Refeições </MealsText>

            <ActionButton 
                buttonType = 'DARK' 
                title = 'Nova Refeição'
                iconName = 'plus'
                onPress = { handleNavigateToNealMeal }
            />

            <MealsListContainer>
                <FlatList 
                    data = {dailyMealsState}
                    keyExtractor = {item => item.date}
                    renderItem = {({ item }) => (
                        <DayMeal date = {item.date} mealsOfTheDay = {item.mealsOfTheDay}/>
                    )}
                    showsVerticalScrollIndicator = { false }
                />
            </MealsListContainer>

        </HomeContainer>
    )
}

export default Home;