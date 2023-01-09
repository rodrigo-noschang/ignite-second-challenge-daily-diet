import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
    background-color: #FFF;
    padding: 35px 20px 40px;
    flex: 1;
`;

export const MealsText = styled.Text`
    margin-top: 30px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;