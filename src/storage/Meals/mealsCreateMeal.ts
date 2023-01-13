import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storage.config,';

import { MealType } from '@screens/Home'; 
import { mealsGetAll } from './mealsGetAll';

type DailyMealType = {
    date: string,
    meal: MealType
}

export const mealsCreateMeal = async (newMeal: DailyMealType) => {
    try {
        const storedMeals = await mealsGetAll();
        const dateMeals = storedMeals.find(meal => meal.date === newMeal.date);

        if (!dateMeals) {
            storedMeals.unshift({
                date: newMeal.date,
                mealsOfTheDay: [newMeal.meal]
            })
        } else {
            dateMeals.mealsOfTheDay.unshift(newMeal.meal);
        }

        console.log('mealsCreateMeal -> ', storedMeals);
    } catch (error) {
        throw error;
    }
}