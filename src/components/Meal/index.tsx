import { MealContainer, MealTime, MealName, MealInDietIcon } from "./styles";

import { MealType } from "@screens/Home";

type Props = {
    singleMeal: MealType
}

const Meal = ({ singleMeal }: Props) => {

    return (
        <MealContainer>
            <MealTime>
                {singleMeal.time}
            </MealTime>

            <MealName>
                {singleMeal.name}
            </MealName>

            <MealInDietIcon isInDiet = {singleMeal.isInDiet} name = 'circle'/>
        </MealContainer>
    )
}

export default Meal;