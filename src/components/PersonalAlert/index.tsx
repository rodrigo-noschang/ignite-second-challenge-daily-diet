import { Backdrop, 
    ContentContainer, 
    BoxContainer, 
    AlertTitle, 
    ButtonsContainer } from "./styles";

import ActionButton from "@components/ActionButton";

type Props = {
    cancelFunction: () => void,
    confirmFunction: () => void,
}

const PersonalAlert = ({cancelFunction, confirmFunction}: Props) => {
    return (
        <>
            <Backdrop />
            <ContentContainer>
                <BoxContainer>
                    <AlertTitle>
                        Deseja realmente excluir o registro da refeição?
                    </AlertTitle>

                    <ButtonsContainer>
                        <ActionButton 
                            style = {{width: '48%'}}
                            title = 'Cancelar'
                            buttonType = 'LIGHT'
                            onPress = {cancelFunction}
                        />

                        <ActionButton 
                            style = {{width: '48%'}}
                            title = 'Sim, excluir'
                            buttonType = 'DARK'
                            onPress = {confirmFunction}
                        />
                    </ButtonsContainer>
                </BoxContainer>
            </ContentContainer>
        </>
    )
}

export default PersonalAlert;