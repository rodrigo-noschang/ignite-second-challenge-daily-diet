import { mealsGetAll } from "./mealsGetAll";

export const mealsGetById = async (id: number, date: string) => {
    const allMeals = await mealsGetAll();
    const dateMeals = allMeals.filter(meal => meal.date === date)[0];

    const selectedMeal = dateMeals.mealsOfTheDay.filter(meal => meal.id === id);

    return selectedMeal[0];
}
