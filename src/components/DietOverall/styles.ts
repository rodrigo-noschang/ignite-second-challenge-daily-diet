import styled, { css } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const DietOverallContainer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 10px 20px;
    align-items: center;
`;

export const IconTouchable = styled(TouchableOpacity)`
    align-self: flex-end;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
    size: 26,
    color: theme.COLORS.DARK_GREEN
}))``;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const SubTitle = styled.Text`
    margin-top: 7px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;