import theme from "src/theme";
import { StatisticsDataContainer, StatisticsDataValue, StatisticsDataText } from "./styles";

type Props = {
    bgColor: keyof typeof theme.COLORS, 
    value: number,
    subtitle: string,
    limitWidth?: boolean
}

const StatisticsData = ({ bgColor, value, subtitle, limitWidth = false }: Props) => {
    return (
        <StatisticsDataContainer bgColor = {bgColor} limitWidth = {limitWidth}>
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