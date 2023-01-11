import { MealType } from "@screens/Home"

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined,
            statistics: {
                meals: MealType[],
                mealsInDietPercentage: string
            },
            newMeal: undefined
        }
    }
}