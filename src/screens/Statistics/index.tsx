import { StatusBar } from "react-native";

import { StatisticsContainer, StatisticsDataContainer, StatisticsDataTitle } from "./styles";
import theme from "../../theme";

import StatisticsHeader from "@components/StatisticsHeader";
import StatisticsData from "@components/StatistcsData";

const Statistics = () => {
    return (
        <StatisticsContainer>
            <StatusBar backgroundColor = {theme.COLORS.LIGHT_GREEN}/>

            <StatisticsHeader />

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

                <StatisticsData 
                    value = {99}
                    subtitle = 'refeições dentro da dieta'
                    bgColor = 'LIGHT_GREEN'
                />

                <StatisticsData 
                    value = {10}
                    subtitle = 'refeições fora da dieta'
                    bgColor = 'LIGHT_RED'
                />

            </StatisticsDataContainer>

        </StatisticsContainer>
    )

}

export default Statistics;