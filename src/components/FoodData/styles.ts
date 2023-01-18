import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    inDiet: boolean
}

export const FoodDataContainer = styled.View`
    flex: 1;
    background-color: #fff;
    margin-top: 35px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 40px 20px 0;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`;

export const Description = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    margin-top: 8px;
`;

export const DateTimeHeader = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
    margin-top: 30px;
`;

export const DateTime = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    margin-top: 8px;
`;

export const InDietContainer = styled.View<Props>`
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.BG_LIGHT_GRAY};
    border-radius: 20px;
    align-items: center;
    padding: 8px 12px 8px;
    align-self: flex-start;
    margin-top: 30px;
`;

export const InDietIcon = styled(FontAwesome).attrs<Props>(({ theme, inDiet }) => ({
    size: 11,
    color: inDiet ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED
}))`
    margin-right: 8px;
`;

export const InDietText = styled.Text``;