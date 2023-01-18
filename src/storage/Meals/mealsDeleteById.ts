import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from "./mealsGetAll"
import { MEALS_COLLECTION } from '@storage/storage.config,';

export const mealsDeleteById = async (foodId: number, date: string) => {
    const allMeals = await mealsGetAll();

    const dateMeals = allMeals.find(dayMeal => dayMeal.date === date);

    if (!dateMeals) return;

    const removedMeal = dateMeals.mealsOfTheDay.filter(meal => meal.id !== foodId);
    
    if (removedMeal.length > 0 ) { // Means there is still food for that day
        dateMeals.mealsOfTheDay = removedMeal;
        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(allMeals));

    } else {
        const removedDay = allMeals.filter(dayMeal => dayMeal.date !== date);
        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(removedDay));
    }

}