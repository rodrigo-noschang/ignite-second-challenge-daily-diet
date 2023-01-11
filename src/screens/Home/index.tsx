import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HomeContainer, MealsText, MealsListContainer } from './styles';

import ProfileHeader from '@components/ProfileHeader';
import DietOverall from '@components/DietOverall';
import ActionButton from '@components/ActionButton';
import DayMeal from '@components/DayMeal';

export type MealType = {
    mealFood: string,
    time: string,
    isInDiet: boolean
}

export type DailyMealType = {
    date: string,
    mealsOfTheDay: MealType[]
}

const Home = () => {
    const [inDietMealsPercentage, setInDietMealsPercentage] = useState('');
    const dailyMeals: DailyMealType[] = [
        {
            date: '12.08.22',
            mealsOfTheDay: [
                {
                    mealFood: 'X-tudo',
                    time: '20:00',
                    isInDiet: false
                },
                {
                    mealFood: 'Sanduíche',
                    time: '16:00',
                    isInDiet: true
                },
                {
                    mealFood: 'Lasanha de frango com queijo',
                    time: '12:30',
                    isInDiet: false
                },
                {
                    mealFood: 'Torta de chocolate',
                    time: '09:30',
                    isInDiet: false
                },
            ]
        },
        {
            date: '11.08.22',
            mealsOfTheDay: [
                {
                    mealFood: 'X-tudo',
                    time: '20:00',
                    isInDiet: false
                },
                {
                    mealFood: 'Sanduíche',
                    time: '16:00',
                    isInDiet: true
                },
                {
                    mealFood: 'Lasanha de frango com queijo',
                    time: '12:30',
                    isInDiet: false
                },
                {
                    mealFood: 'Torta de chocolate',
                    time: '09:30',
                    isInDiet: false
                },
            ]
        }
    ]
    const navigation = useNavigation();

    const handleNavigation = () => {
        const allMealsOnly = dailyMeals.map(dailyMeal => dailyMeal.mealsOfTheDay).flat();
        navigation.navigate('statistics', {meals: allMealsOnly})
    }

    useEffect(() => {
        const allMealsOnly = dailyMeals.map(dailyMeal => dailyMeal.mealsOfTheDay).flat();
        const inDietMeals = allMealsOnly.filter(meal => meal.isInDiet);
        
        const inDietRatio = ((inDietMeals.length / allMealsOnly.length) * 100).toFixed(2);
        
        setInDietMealsPercentage(inDietRatio);
    }, [])

    return (
        <HomeContainer>  
            <ProfileHeader /> 
            <DietOverall 
                inDietMealsPercentage = {inDietMealsPercentage}
                onNavigate = {handleNavigation}    
            />

            <MealsText> Refeições </MealsText>

            <ActionButton 
                buttonType = 'DARK' 
                title = 'Nova Refeição'
                iconName = 'plus'
            />

            <MealsListContainer>
                <FlatList 
                    data = {dailyMeals}
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