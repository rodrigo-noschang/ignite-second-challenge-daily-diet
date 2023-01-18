import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { DayMealContainer, DateHeader } from './styles';

import { DailyMealsType } from '@screens/Home';
import Meal from '@components/Meal';


const DayMeal = ({ date, mealsOfTheDay }: DailyMealsType) => {
    const navigate = useNavigation();

    const handleNavigation = async (id: number) => {
        navigate.navigate('foodOverview', {
            foodId: id,
            date: date
        })
    }

    return (
        <DayMealContainer>
            <DateHeader>
                { date }
            </DateHeader>

            <FlatList 
                data = {mealsOfTheDay}
                keyExtractor = {item => item.id.toString()}
                renderItem = {({ item }) => (
                    <Meal 
                        singleMeal = {item}
                        onPress = {() => handleNavigation(item.id)}
                    />
                )}
            />
        </DayMealContainer>
    )
}

export default DayMeal;