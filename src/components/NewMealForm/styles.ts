import styled, { css } from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

type optionsProps = {
    option: string,
    isInDiet: string
}

export const NewMealFormContainer = styled.View`
    flex: 1;
    background-color: #fff;
    margin-top: 30px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 20px 20px 0;
`;

export const LabelInputContainer = styled.View`
    margin-top: 25px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.BG_DARK_GRAY};
    `};
`;

export const Input = styled.TextInput`
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 5px;

    ${({ theme }) => css`
        border: 2px solid ${theme.COLORS.BG_LIGHT_GRAY};
        color: ${theme.COLORS.TEXT_BOLD_GRAY};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
`;

export const TextField = styled.TextInput`
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 5px;
    height: 120px;

    ${({ theme }) => css`
        border: 2px solid ${theme.COLORS.BG_LIGHT_GRAY};
        color: ${theme.COLORS.TEXT_BOLD_GRAY};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
`;

export const SideBySideElement = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ShortInput = styled.TextInput`
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 5px;
    width: 165px;

    ${({ theme }) => css`
        border: 2px solid ${theme.COLORS.BG_LIGHT_GRAY};
        color: ${theme.COLORS.TEXT_BOLD_GRAY};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
`;

export const InDietTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.TEXT_BOLD_GRAY};
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}

    margin-top: 25px;
`;

export const InDietOption = styled(TouchableOpacity)<optionsProps>`
    padding: 17px 60px;
    margin-top: 10px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    
    background-color: ${({theme, option, isInDiet}) => (
        option === 'yes' && isInDiet === option ? theme.COLORS.LIGHT_GREEN : 
        option === 'no' && isInDiet === option ? theme.COLORS.LIGHT_RED :
        theme.COLORS.BG_LIGHT_GRAY
    )}

    border: ${({ option, isInDiet }) => (
        isInDiet === option ? `2px solid` : 'none'
    )}
    border-color: ${({theme, option, isInDiet}) => (
        option === 'yes' && isInDiet === option ? theme.COLORS.DARK_GREEN : 
        option === 'no' && isInDiet === option ? theme.COLORS.DARK_RED :
        'transparent'
    )}

`;

export const InDietIcon = styled(FontAwesome)``;

export const InDietOptionText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
    margin-left: 10px;
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding-bottom: 30px;
`;