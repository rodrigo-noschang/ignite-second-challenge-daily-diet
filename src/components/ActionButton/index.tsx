import { TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { ActionButtonContainer, 
    ActionButtonThemeType,
    ButtonText, 
    Icon } from "./styles";

type Props = TouchableOpacityProps & {
    buttonType: ActionButtonThemeType,
    title: string,
    iconName?: keyof typeof AntDesign.glyphMap
}

const ActionButton = ({ buttonType, title, iconName, ...rest }: Props) => {

    return (
        <ActionButtonContainer type = { buttonType } {...rest}>
            
            { iconName &&
                <Icon type = {buttonType} name = {iconName}/>
            }

            <ButtonText type = {buttonType}> {title} </ButtonText>
        </ActionButtonContainer>
    )
}

export default ActionButton;