import theme from "src/theme";
import styled, { css } from "styled-components/native";

type Props = {
    bgColor: keyof typeof theme.COLORS;
}

export const StatisticsDataContainer = styled.View<Props>`
    background-color: ${({theme, bgColor}) => theme.COLORS[bgColor]};
    border-radius: 5px;
    padding: 20px;
    margin-top: 10px;
`;

export const StatisticsDataValue  = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
    `}
    text-align: center;
`;

export const StatisticsDataText  = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    text-align: center;
`;