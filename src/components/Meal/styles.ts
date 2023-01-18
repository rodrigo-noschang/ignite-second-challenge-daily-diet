import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
    isInDiet: boolean
}

export const MealContainer = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BG_MEDIUM_GRAY};
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 5px;
`;

export const MealTime = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const MealName = styled.Text`
    margin-left: 12px;
    padding-left: 12px;

    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: ${({ theme }) => theme.COLORS.BG_MEDIUM_GRAY};

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

    flex: 1;
`;

export const MealInDietIcon = styled(FontAwesome).attrs<Props>(({ theme, isInDiet }) => ({
    size: 16,
    color: isInDiet ? theme.COLORS.LIGHT_GREEN : theme.COLORS.RED
}))`
`;
