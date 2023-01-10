import theme from "src/theme";
import { StatisticsDataContainer, StatisticsDataValue, StatisticsDataText } from "./styles";

type Props = {
    bgColor: keyof typeof theme.COLORS, 
    value: number,
    subtitle: string
}

const StatisticsData = ({ bgColor, value, subtitle }: Props) => {
    return (
        <StatisticsDataContainer bgColor = {bgColor}>
            <StatisticsDataValue>
                { value }
            </StatisticsDataValue>

            <StatisticsDataText>
                {subtitle}
            </StatisticsDataText>

        </StatisticsDataContainer>
    )
}

export default StatisticsData;