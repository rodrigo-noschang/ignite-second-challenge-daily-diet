import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const StatisticsHeaderContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    padding: 20px 20px 70px;
`;

export const ReturnIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
    size: 22,
    color: theme.COLORS.DARK_GREEN
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