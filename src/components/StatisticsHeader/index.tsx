import { StatisticsHeaderContainer, 
    ReturnIcon, 
    StatisticText, 
StatisticValue } from './styles'

const StatisticsHeader = () => {

    return (
        <StatisticsHeaderContainer>
            <ReturnIcon name = 'arrow-left'/>

            <StatisticValue>
                90.86%
            </StatisticValue>

            <StatisticText>
                das refeições dentro da dieta
            </StatisticText>
        </StatisticsHeaderContainer>
    )
}

export default StatisticsHeader;