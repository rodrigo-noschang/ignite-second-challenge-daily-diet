import { DayMealContainer, DateHeader } from './styles';

import { DailyMealType } from '@screens/Home';

import Meal from '@components/Meal';
import { FlatList } from 'react-native';


const DayMeal = ({ date, mealsOfTheDay }: DailyMealType) => {

    return (
        <DayMealContainer>
            <DateHeader>
                { date }
            </DateHeader>

            <FlatList 
                data = {mealsOfTheDay}
                keyExtractor = {item => item.mealFood}
                renderItem = {({ item }) => (
                    <Meal singleMeal = {item}/>
                )}
            />
        </DayMealContainer>
    )
}

export default DayMeal;