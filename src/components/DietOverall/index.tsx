import { DietOverallContainer, 
    IconTouchable, 
    Icon, 
    Title, 
    SubTitle } from './styles';

type Props = {
    inDietMealsPercentage: string,
    onNavigate: () => void
}

const DietOverall = ({ inDietMealsPercentage, onNavigate }: Props) => {

    return (
        <DietOverallContainer>
            <IconTouchable onPress = {onNavigate}>
                <Icon name = 'arrow-top-right'/>
            </IconTouchable>

            <Title>
                { inDietMealsPercentage }%
            </Title>

            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </DietOverallContainer>
    )

}

export default DietOverall;