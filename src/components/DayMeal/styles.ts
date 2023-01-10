import styled, { css } from "styled-components/native";

export const DayMealContainer = styled.View`
    margin-bottom: 30px;
`;

export const DateHeader = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        color: ${theme.COLORS.TEXT_BOLD_GRAY};
    `};

    margin-bottom: 5px;
`;