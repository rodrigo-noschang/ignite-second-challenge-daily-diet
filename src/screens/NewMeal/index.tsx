import { NewMealContainer } from "./styles";

import ReturnHeader from "@components/ReturnHeader";
import NewMealForm from "@components/NewMealForm";

const NewMeal = () => {

    return (
        <NewMealContainer>
            <ReturnHeader text = 'Nova Refeição'/>

            <NewMealForm />
        </NewMealContainer>
    )
}

export default NewMeal;