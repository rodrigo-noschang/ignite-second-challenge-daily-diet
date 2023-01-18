import styled, { css } from 'styled-components/native';

export const Backdrop = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BG_DARK_GRAY};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    opacity: .3;
`;

export const ContentContainer = styled.View`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    justify-content: center;
    padding: 0 20px 0;
`;

export const BoxContainer = styled.View`
    width: 100%;
    background-color: #fff;
    padding: 30px 20px 20px;
    border-radius: 10px;
`;

export const AlertTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
    text-align: center;
    margin: 10px 0 20px;
    padding: 0 10px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;