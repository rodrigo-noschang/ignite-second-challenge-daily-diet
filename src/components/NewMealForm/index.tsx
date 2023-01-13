import { useState, useRef } from "react";
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
    InDietOptionText,
    ButtonContainer
    } from "./styles";

import ActionButton from "@components/ActionButton";

import { mealsCreateMeal } from "@storage/Meals/mealsCreateMeal";
import { DailyMealsType } from "@screens/Home";

const NewMealForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isInDiet, setIsInDiet] = useState('');
    
    const theme = useTheme();

    const selectYes = () => {
        setIsInDiet('yes');
    }

    const selectNo = () => {
        setIsInDiet('no');
    }

    const validateNameInput = () => {
        if (name.length === 0) {
            throw new Error('Nome inválido');
        }
    }

    const validateDescriptionInput = () => {
        if (description.length === 0) {
            throw new Error('Descrição inválida');
        }
    }

    const validateDateInput = () => {
        const separatedValues = date.split('.');
        const isCorrectlyFormated = separatedValues.every(el => el.length === 2);

        if (!isCorrectlyFormated) {
            throw new Error('Os valores da data devem ter 2 dígitos e serem separados por um ponto');
        }
    }

    const validateTimeInput = () => {
        const timeValues = time.split(':');
        const hours = parseInt(timeValues[0]);
        const minutes = parseInt(timeValues[1]);
        const isCorrectlyFormated = timeValues.every(el => el.length === 2);

        console.log(hours, typeof hours);
        console.log(minutes, typeof minutes);

        if (!isCorrectlyFormated) {
            throw new Error('Os valores da hora devem ter 2 dígitos e serem separados por dois pontos');
        }

        if (hours > 24) {
            throw new Error('Valor das horas inválido');
        }

        if (minutes > 59) {
            throw new Error('Valor dos minutos inválidos');
        }
    }

    const formatDateInput = (newValue: string) => {
        const newValueLength = newValue.length;
        const isErasingInput = newValueLength < date.length;
        
        if (!isErasingInput && (newValueLength === 2 || newValueLength === 5)) {
            newValue = newValue + '.';
        }

        setDate(newValue);
    } 
    
    const formatHourInput = (newValue: string) => {
        const isErasingInput = newValue.length < time.length;
        const newValueLength = newValue.length;
        
        if (!isErasingInput && newValueLength === 2) {
            newValue = newValue + ':';
        }
        
        setTime(newValue);
    }

    const createMealObject = async () => { 
        const newMeal = {
            date,
            meal: {
                name,
                description,
                time,
                isInDiet: isInDiet === 'yes' ? true : false
            }
        }

        await mealsCreateMeal(newMeal);
    }

    const handleRegisterNewMeal = () => {
        try {
            validateNameInput();
            validateDescriptionInput();
            validateDateInput();
            validateTimeInput();

            const meal = createMealObject();
        
        } catch (error) {
            console.log(error);
        
        
        } finally {
            // setName('');
            // setDescription('');
            // setDate('');
            // setTime('');
            // setIsInDiet('');
        }

    }

    return(
        <NewMealFormContainer>
            <LabelInputContainer>
                <Label> Nome </Label>
                <Input 
                    onChangeText = {setName}
                    value = {name}
                    placeholder = 'Alimento da refeição'
                    placeholderTextColor = {theme.COLORS.BG_MEDIUM_GRAY}
                />
            </LabelInputContainer>

            <LabelInputContainer>
                <Label> Descrição </Label>
                <TextField 
                    multiline 
                    textAlignVertical = 'top'
                    onChangeText = {setDescription}
                    value = {description}
                    placeholder = 'Descrição'
                    placeholderTextColor = {theme.COLORS.BG_MEDIUM_GRAY}
                />
            </LabelInputContainer>

            <SideBySideElement>
                <LabelInputContainer>
                    <Label>
                        Data
                    </Label>
                    <ShortInput 
                        onChangeText = {formatDateInput}
                        value = {date}
                        placeholder = 'dd.mm.aa'
                        placeholderTextColor = {theme.COLORS.BG_MEDIUM_GRAY}
                        maxLength = {8}
                        keyboardType = 'numeric'
                    />
                </LabelInputContainer>

                <LabelInputContainer>
                    <Label>
                        Hora
                    </Label>
                    <ShortInput 
                        onChangeText = {formatHourInput}
                        value = {time}
                        placeholder = '09:00'
                        placeholderTextColor = {theme.COLORS.BG_MEDIUM_GRAY}
                        maxLength = {5}
                        keyboardType = "numeric"
                    />
                </LabelInputContainer>
            </SideBySideElement>

            <InDietTitle>
                Está dentro da dieta?
            </InDietTitle>

            <SideBySideElement>
                <InDietOption 
                    option = 'yes' 
                    isInDiet = {isInDiet}
                    onPress = {selectYes}
                >

                    <InDietIcon name = 'circle' color = {theme.COLORS.DARK_GREEN}/>

                    <InDietOptionText>
                        Sim
                    </InDietOptionText>
                </InDietOption>

                <InDietOption 
                    option = 'no' 
                    isInDiet = {isInDiet}
                    onPress = {selectNo}    
                >
                    <InDietIcon name = 'circle' color = {theme.COLORS.DARK_RED}/>

                    <InDietOptionText>
                        Não
                    </InDietOptionText>
                </InDietOption>
            </SideBySideElement>

            <ButtonContainer>
                <ActionButton 
                    buttonType = 'DARK'
                    title = 'Cadastrar Refeição'
                    onPress = {handleRegisterNewMeal}
                />
            </ButtonContainer>
        </NewMealFormContainer>
    )
}

export default NewMealForm;