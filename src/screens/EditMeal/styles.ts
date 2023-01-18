import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const EditMealContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BG_MEDIUM_GRAY};
`;