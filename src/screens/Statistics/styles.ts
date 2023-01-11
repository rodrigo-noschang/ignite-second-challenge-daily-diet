import styled, { css } from 'styled-components/native';

export const StatisticsContainer = styled.View`
    flex: 1;
`;

export const StatisticsDataContainer = styled.View`
    padding: 30px 20px 0;
    margin-top: -30px;
    border-radius: 30px;
    background-color: #fff;
`;

export const StatisticsDataTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
    text-align: center;
    margin-bottom: 15px;
`;

export const StatisticsSideBySide = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;