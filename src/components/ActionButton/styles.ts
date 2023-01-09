import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export type ActionButtonThemeType = 'DARK' | 'LIGHT'; 

type Props = {
    type: ActionButtonThemeType
}

export const ActionButtonContainer = styled(TouchableOpacity)<Props>`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 15px 0;
    margin-top: 10px;
    
    ${({ theme, type }) => css`
        background-color: ${type === 'DARK' ? theme.COLORS.BG_DARK_GRAY : '#FFF'};
        border: ${ type === 'DARK' ? 'none' : theme.COLORS.BG_DARK_GRAY };
    `}
`;

export const Icon = styled(AntDesign).attrs<Props>(({ theme, type }) => ({
    size: theme.FONT_SIZE.MD,
    color: type === 'DARK' ? theme.COLORS.TEXT_WHITE : theme.COLORS.TEXT_BOLD_GRAY
}))`
    margin-right: 10px;
`;

export const ButtonText = styled.Text<Props>`
    ${({ theme, type }) => css`
        color: ${type === 'DARK' ? theme.COLORS.TEXT_WHITE : theme.COLORS.TEXT_BOLD_GRAY};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD}
    `};
`;