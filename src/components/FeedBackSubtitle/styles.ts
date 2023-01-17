import styled from "styled-components/native";

export const NormalMessage = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const MessageHighlight = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    margin: 0 5px;
`;