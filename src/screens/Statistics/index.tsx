import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MealType } from "@screens/Home";

import { StatisticsContainer, 
    StatisticsDataContainer, 
    StatisticsDataTitle, 
    StatisticsSideBySide } from "./styles";

import StatisticsHeader from "@components/StatisticsHeader";
import StatisticsData from "@components/StatistcsData";

type RouteParams = {
    meals: MealType[]
}

const Statistics = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { meals } = route.params as RouteParams;

    const bestSequenceOfInDietMeals = calculateBestSequenceOfMealsInDiet();
    const registeredMeals = calculateRegisteredMeals();
    const mealsInDiet = calculateMealsInDiet();
    const mealsNotInDiet = calculateMealsNotInDiet();

    const handleNavigation = () => {
        navigation.navigate('home');
    }

    function calculateBestSequenceOfMealsInDiet () {
        let sequenceCounter = 0;
        let currentBestSequence = 0;

        for (const meal of meals) {
            if (!meal.isInDiet) {
                currentBestSequence = Math.max(sequenceCounter, currentBestSequence);
                sequenceCounter = 0; // restart sequence counter
            } else {
                sequenceCounter++;
            }
        }

        return Math.max(sequenceCounter, currentBestSequence);
    }

    function calculateRegisteredMeals () {
        return meals.length;
    }

    function calculateMealsInDiet () {
        return meals.reduce((acc, curr) => {
            return curr.isInDiet ? acc + 1 : acc;
        }, 0)
    }

    function calculateMealsNotInDiet() {
        return registeredMeals - mealsInDiet;
    }

    return (
        <StatisticsContainer>
            
            <StatisticsHeader 
                onNavigate = {handleNavigation}
            />

            <StatisticsDataContainer>
                <StatisticsDataTitle>
                    Estatísticas Gerais
                </StatisticsDataTitle>

                <StatisticsData 
                    value = {bestSequenceOfInDietMeals}
                    subtitle = 'melhor sequência de pratos dentro da dieta'
                    bgColor = 'BG_LIGHT_GRAY'
                />

                <StatisticsData 
                    value = {registeredMeals}
                    subtitle = 'refeições registradas'
                    bgColor = 'BG_LIGHT_GRAY'
                />

                <StatisticsSideBySide>
                    <StatisticsData 
                        value = {mealsInDiet}
                        subtitle = 'refeições dentro da dieta'
                        bgColor = 'LIGHT_GREEN'
                        limitWidth
                    />

                    <StatisticsData 
                        value = {mealsNotInDiet}
                        subtitle = 'refeições fora da dieta'
                        bgColor = 'LIGHT_RED'
                        limitWidth
                    />
                </StatisticsSideBySide>

            </StatisticsDataContainer>

        </StatisticsContainer>
    )

}

export default Statistics;