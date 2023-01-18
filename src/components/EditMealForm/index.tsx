import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';

import ActionButton from '@components/ActionButton';
import { InputFormatError } from '../../error';
import { idCounter, increaseCounter } from '@utils/mealId';
import { mealsCreateMeal } from '@storage/Meals/mealsCreateMeal';

import {
    NewMealFormContainer,
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
} from '@components/NewMealForm/styles';

import { MealType } from '@screens/Home';


type Props = {
    food: MealType,
    date: string
}

const EditMealForm = ({food, date}: Props) => {
    const [name, setName] = useState(food.name);
    const [description, setDescription] = useState(food.description);
    const [dateState, setDateState] = useState(date);
    const [time, setTime] = useState(food.time);
    const [isInDiet, setIsInDiet] = useState(food.isInDiet ? 'yes' : 'no');
    
    const theme = useTheme();

    const createMealObject = () => { 
        console.log('Implementar a função que cria o objeto!!');
        // const newMeal = {
        //     date,
        //     meal: {
        //         id: idCounter,
        //         name,
        //         description,
        //         time,
        //         isInDiet: isInDiet === 'yes' ? true : false
        //     }
        // }

        // return newMeal;
    }

    const formatDateInput = (newValue: string) => {
        const newValueLength = newValue.length;
        const isErasingInput = newValueLength < date.length;
        
        if (!isErasingInput && (newValueLength === 2 || newValueLength === 5)) {
            newValue = newValue + '.';
        }

        setDateState(newValue);
    } 
    
    const formatHourInput = (newValue: string) => {
        const isErasingInput = newValue.length < time.length;
        const newValueLength = newValue.length;
        
        if (!isErasingInput && newValueLength === 2) {
            newValue = newValue + ':';
        }
        
        setTime(newValue);
    }

    const selectYes = () => {
        setIsInDiet('yes');
    }

    const selectNo = () => {
        setIsInDiet('no');
    }

    const validateNameInput = () => {

        if (name.length === 0) {
            throw new InputFormatError('Nome inválido');
        }
    }

    const validateDescriptionInput = () => {
        if (description.length === 0) {
            throw new InputFormatError('Descrição inválida');
        }
    }

    const validateDateInput = () => {
        const separatedValues = date.split('.');

        if (separatedValues.length !== 3) {
            throw new InputFormatError('A data deve incluir dia, mês e ano');
        }

        const isCorrectlyFormated = separatedValues.every(el => el.length === 2);

        if (!isCorrectlyFormated) {
            throw new InputFormatError('Os valores da data devem ter 2 dígitos e serem separados por um ponto');
        }
    }

    const validateTimeInput = () => {
        const timeValues = time.split(':');
        const hours = parseInt(timeValues[0]);
        const minutes = parseInt(timeValues[1]);
        const isCorrectlyFormated = timeValues.every(el => el.length === 2);

        if (!isCorrectlyFormated) {
            throw new InputFormatError('Os valores da hora devem ter 2 dígitos e serem separados por dois pontos');
        }

        if (hours > 24) {
            throw new InputFormatError('Valor das horas inválido');
        }

        if (minutes > 59) {
            throw new InputFormatError('Valor dos minutos inválidos');
        }
    }

    const validateIsInDiet = () => {
        if (isInDiet.length === 0) {
            throw new InputFormatError('Selecione Sim ou Não para a opção Está dentro da dieta?');
        }
    }

    const handleEditMeal = async () => {
        try {
            validateNameInput();
            validateDescriptionInput();
            validateDateInput();
            validateTimeInput();
            validateIsInDiet();
        
        } catch (error) {
            const errorMessage = error instanceof InputFormatError ?
                error.message :
                'Não foi possível criar essa refeição';

            return Alert.alert('Nova Refeição', errorMessage);
        
        }
    }

    return (
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
                    onPress = {handleEditMeal}
                />
            </ButtonContainer>
        </NewMealFormContainer>
    )
}

export default EditMealForm;