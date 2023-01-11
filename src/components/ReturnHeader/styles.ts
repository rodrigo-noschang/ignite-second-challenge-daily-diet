import styled, { css } from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const ReturnHeaderContainer = styled.View`
    flex-direction: row;
    padding: 30px 20px 0;
`;

export const ReturnIconTouchable = styled(TouchableOpacity)``;

export const ReturnIcon = styled(AntDesign).attrs(({ theme }) => ({
    size: 22,
    color: theme.COLORS.BG_DARK_GRAY
}))``;

export const ReturnHeaderText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
    `};
    flex: 1;
    text-align: center;
    margin-right: 10px;
`;