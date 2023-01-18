import styled, { css } from 'styled-components/native';

export const EmptyListContainer = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BG_LIGHT_GRAY};
    padding: 20px;
    border-radius: 10px;
`;

export const EmptyListImage = styled.Image``;

export const EmptyListTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};

    text-align: center;
    margin-top: 20px;

`;

export const EmptyListSubtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.BG_DARK_GRAY};
    `};

    text-align: center;
    margin-top: 8px;
`;
