import { useState } from "react";
import { useTheme } from "styled-components/native";

import { NewMealFormContainer, 
    LabelInputContainer,
    Label,
    Input, 
    TextField,
    SideBySideElement,
    ShortInput,
    InDietTitle,
    InDietOption, 
    InDietIcon,
    InDietOptionText
    } from "./styles";

const NewMealForm = () => {
    const [selected, setSelected] = useState('');
    const theme = useTheme();

    const selectYes = () => {
        setSelected('yes');
    }

    const selectNo = () => {
        setSelected('no');
    }

    return(
        <NewMealFormContainer>
            <LabelInputContainer>
                <Label> Nome </Label>
                <Input />
            </LabelInputContainer>

            <LabelInputContainer>
                <Label> Descrição </Label>
                <TextField multiline textAlignVertical = 'top'/>
            </LabelInputContainer>

            <SideBySideElement>
                <LabelInputContainer>
                    <Label>
                        Data
                    </Label>
                    <ShortInput />
                </LabelInputContainer>

                <LabelInputContainer>
                    <Label>
                        Hora
                    </Label>
                    <ShortInput />
                </LabelInputContainer>
            </SideBySideElement>

            <InDietTitle>
                Está dentro da dieta?
            </InDietTitle>

            <SideBySideElement>
                <InDietOption 
                    option = 'yes' 
                    selected = {selected}
                    onPress = {selectYes}    
                >
                    <InDietIcon name = 'circle' color = {theme.COLORS.DARK_GREEN}/>

                    <InDietOptionText>
                        Sim
                    </InDietOptionText>
                </InDietOption>

                <InDietOption 
                    option = 'no' 
                    selected = {selected}
                    onPress = {selectNo}    
                >
                    <InDietIcon name = 'circle' color = {theme.COLORS.DARK_RED}/>

                    <InDietOptionText>
                        Não
                    </InDietOptionText>
                </InDietOption>

            </SideBySideElement>
        </NewMealFormContainer>
    )
}

export default NewMealForm;