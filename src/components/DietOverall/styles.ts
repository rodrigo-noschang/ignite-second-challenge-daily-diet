import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
    percentage: number
}

export const mealsInDietThreshold = 75; // user needs to have over 75% of meals "in diet" for the theme to be green

export const DietOverallContainer = styled.View<Props>`
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 10px 20px;
    align-items: center;
    
    background-color: ${({ theme, percentage }) => (
        percentage >= mealsInDietThreshold ? theme.COLORS.LIGHT_GREEN :
        theme.COLORS.LIGHT_RED
    )};
`;

export const IconTouchable = styled(TouchableOpacity)`
    align-self: flex-end;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, percentage }) => ({
    size: 26,
    color: percentage >= mealsInDietThreshold ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED
}))``;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
    `}
`;

export const SubTitle = styled.Text`
    margin-top: 7px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;