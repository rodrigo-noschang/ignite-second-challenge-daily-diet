import { useRoute } from '@react-navigation/native'

import { StatisticsHeaderContainer, 
    ReturnIconTouchable,
    ReturnIcon, 
    StatisticText, 
StatisticValue } from './styles'

type Props = {
    onNavigate: () => void
}

type RouteParams = {
    mealsInDietPercentage: string
}

const StatisticsHeader = ({ onNavigate }: Props) => {
    const route = useRoute();
    const { mealsInDietPercentage } = route.params as RouteParams;

    const percentage = parseInt(mealsInDietPercentage);

    return (
        <StatisticsHeaderContainer percentage = {percentage}>
            <ReturnIconTouchable onPress = {onNavigate}>
                <ReturnIcon name = 'arrow-left' percentage = {percentage}/>
            </ReturnIconTouchable>

            <StatisticValue>
                {mealsInDietPercentage}%
            </StatisticValue>

            <StatisticText>
                das refeições dentro da dieta
            </StatisticText>
        </StatisticsHeaderContainer>
    )
}

export default StatisticsHeader;