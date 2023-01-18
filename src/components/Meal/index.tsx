import { TouchableOpacityProps } from "react-native";

import { MealContainer, MealTime, MealName, MealInDietIcon } from "./styles";

import { MealType } from "@screens/Home";

type Props = TouchableOpacityProps & {
    singleMeal: MealType
}

const Meal = ({ singleMeal, ...rest }: Props) => {

    return (
        <MealContainer {...rest}>
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