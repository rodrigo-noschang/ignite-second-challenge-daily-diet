import { useNavigation } from "@react-navigation/native";

import { ReturnHeaderContainer, 
    ReturnIconTouchable, 
    ReturnIcon, 
    ReturnHeaderText } from "./styles";

type Props = {
    text: string
}

const ReturnHeader = ({ text }: Props) => {
    const navigation = useNavigation();

    const handleReturnHome = () => {
        navigation.navigate('home');
    }

    return (
        <ReturnHeaderContainer>
            <ReturnIconTouchable onPress = {handleReturnHome}>
                <ReturnIcon name = 'arrowleft'/>
            </ReturnIconTouchable>

            <ReturnHeaderText>
                {text}
            </ReturnHeaderText>
        </ReturnHeaderContainer>
    )
}

export default ReturnHeader;