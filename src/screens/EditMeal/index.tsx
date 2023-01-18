import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";

import { EditMealContainer } from "./styles";

import ReturnHeader from "@components/ReturnHeader";
import EditMealForm from "@components/EditMealForm";
import { mealsGetById } from "@storage/Meals/mealsGetById";
import { MealType } from "@screens/Home";

type RouteParams = {
    foodId: number,
    date: string
}

const EditMeal = () => {
    const [food, setFood] = useState<MealType>();
    const route = useRoute();
    const { foodId, date } = route.params as RouteParams;

    const fetchFood = async () => {
        const food = await mealsGetById(foodId, date);
        setFood(food);
    }

    useFocusEffect(useCallback(() => {
        fetchFood();
    }, []))

    return (
        <EditMealContainer>
            <ReturnHeader 
                text = 'Editar refeição'
            />
            { food ?
                <EditMealForm food = {food} date = {date}/>
            :
                <ActivityIndicator />
            }
        </EditMealContainer>
    )
}

export default EditMeal;