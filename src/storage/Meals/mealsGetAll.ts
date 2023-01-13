import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEALS_COLLECTION } from "@storage/storage.config,";
import { DailyMealsType } from "@screens/Home";

export const mealsGetAll = async () => {
    try {
        const storageContent = await AsyncStorage.getItem(MEALS_COLLECTION);
        
        const storedMeals: DailyMealsType[] = storageContent ? JSON.parse(storageContent) : [];
        return storedMeals;
    } catch (error) {
        throw error;
    }
}