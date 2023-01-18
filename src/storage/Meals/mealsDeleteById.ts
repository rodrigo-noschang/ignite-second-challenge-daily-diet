import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from "./mealsGetAll"
import { MEALS_COLLECTION } from '@storage/storage.config,';

export const mealsDeleteById = async (foodId: number, date: string) => {
    const allMeals = await mealsGetAll();

    const dateMeals = allMeals.find(dayMeal => dayMeal.date === date);

    if (!dateMeals) return;

    const removedMeal = dateMeals.mealsOfTheDay.filter(meal => meal.id !== foodId);
    
    dateMeals.mealsOfTheDay = removedMeal;

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(allMeals));
}