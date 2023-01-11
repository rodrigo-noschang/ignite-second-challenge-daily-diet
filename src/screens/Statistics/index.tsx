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
    
    console.log('On Statistics Screen - > ', meals);

    const handleNavigation = () => {
        navigation.navigate('home');
    }

    return (
        <StatisticsContainer>
            <StatusBar backgroundColor = 'transparent'/>

            <StatisticsHeader 
                onNavigate = {handleNavigation}
            />

            <StatisticsDataContainer>
                <StatisticsDataTitle>
                    Estatísticas Gerais
                </StatisticsDataTitle>

                <StatisticsData 
                    value = {22}
                    subtitle = 'melhor sequência de pratos dentro da dieta'
                    bgColor = 'BG_LIGHT_GRAY'
                />

                <StatisticsData 
                    value = {109}
                    subtitle = 'refeições registradas'
                    bgColor = 'BG_LIGHT_GRAY'
                />

                <StatisticsSideBySide>
                    <StatisticsData 
                        value = {99}
                        subtitle = 'refeições dentro da dieta'
                        bgColor = 'LIGHT_GREEN'
                        limitWidth
                    />

                    <StatisticsData 
                        value = {10}
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