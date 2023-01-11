import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import { mealsInDietThreshold } from "@components/DietOverall/styles";

type Props = {
    percentage: number
}

export const StatisticsHeaderContainer = styled.View<Props>`
    padding: 30px 20px 70px;

    background-color: ${({ theme, percentage }) => (
        percentage >= mealsInDietThreshold ? theme.COLORS.LIGHT_GREEN :
        theme.COLORS.LIGHT_RED
    )};
`;

export const ReturnIconTouchable = styled(TouchableOpacity)`
    align-self: flex-start;
    padding: 5px;
`;

export const ReturnIcon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, percentage }) => ({
    size: 22,
    color: percentage >= mealsInDietThreshold ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED
}))``;

export const StatisticValue = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
    `};
    text-align: center;
`;

export const StatisticText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
    text-align: center;
`;