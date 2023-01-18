import { FoodDataContainer,
    Title,
    Description,
    DateTimeHeader,
    DateTime,
    InDietContainer,
    InDietIcon,
    InDietText, } from './styles';
    
import { MealType } from '@screens/Home';

type Props = {
    food: MealType,
    date: string
}

const FoodData = ({ food, date }: Props) => {

    return (
        <FoodDataContainer>
            <Title>
                {food.name}
            </Title>

            <Description>
                {food.description}
            </Description>

            <DateTimeHeader>Data e hora</DateTimeHeader>
            <DateTime>
                {date} às {food.time}
            </DateTime>

            <InDietContainer inDiet = {food.isInDiet}>
                <InDietIcon 
                    name = 'circle'
                    inDiet = {food.isInDiet}    
                />
                <InDietText>
                    {food.isInDiet ?
                        'Dentro da dieta'
                    :
                        'Fora da dieta'
                    }


                </InDietText>
            </InDietContainer>

        </FoodDataContainer>
    )
}

export default FoodData;