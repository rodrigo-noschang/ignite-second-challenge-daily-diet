import { DayMealContainer, DateHeader } from './styles';

import { DailyMealsType } from '@screens/Home';

import Meal from '@components/Meal';
import { FlatList } from 'react-native';


const DayMeal = ({ date, mealsOfTheDay }: DailyMealsType) => {

    return (
        <DayMealContainer>
            <DateHeader>
                { date }
            </DateHeader>

            <FlatList 
                data = {mealsOfTheDay}
                keyExtractor = {item => item.name}
                renderItem = {({ item }) => (
                    <Meal singleMeal = {item}/>
                )}
            />
        </DayMealContainer>
    )
}

export default DayMeal;