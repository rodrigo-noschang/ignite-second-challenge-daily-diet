import { StatisticsHeaderContainer, 
    ReturnIconTouchable,
    ReturnIcon, 
    StatisticText, 
StatisticValue } from './styles'

type Props = {
    onNavigate: () => void
}

const StatisticsHeader = ({ onNavigate }: Props) => {

    return (
        <StatisticsHeaderContainer>
            <ReturnIconTouchable onPress = {onNavigate}>
                <ReturnIcon name = 'arrow-left'/>
            </ReturnIconTouchable>

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