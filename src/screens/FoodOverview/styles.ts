import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type Props = {
    inDiet: boolean
}

export const FoodOverviewContainer = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, inDiet }) => (
        inDiet ? theme.COLORS.LIGHT_GREEN : 
        !inDiet ?theme.COLORS.LIGHT_RED :
        '#fff'
    )};
`;

export const ButtonsContainer = styled.View`
    background-color: #fff;
    padding: 0 20px 30px;
`;