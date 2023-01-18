import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealsGetAll";
import { mealsCreateMeal } from "./mealsCreateMeal";
import { mealsDeleteById } from "./mealsDeleteById";

import { MealType } from "@screens/Home";
import { MEALS_COLLECTION } from "@storage/storage.config,";

export const mealsEditFood = async (newFoodData: MealType, oldDate: string, newDate: string) => {
    const {name, description, time, isInDiet} = newFoodData;
    
    const allMeals = await mealsGetAll();

    if (newDate === oldDate) {
        const dateMeals = allMeals.find(meal => meal.date === newDate);
        if (!dateMeals) return;

        const oldFood = dateMeals.mealsOfTheDay.find(meal => meal.id === newFoodData.id);
        if (!oldFood) return;

        oldFood.name = name;
        oldFood.description = description;
        oldFood.time = time;
        oldFood.isInDiet = isInDiet;

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(allMeals));
    } else {
        await mealsDeleteById(newFoodData.id, oldDate);
        
        await mealsCreateMeal({date: newDate, meal: newFoodData});
    }
}