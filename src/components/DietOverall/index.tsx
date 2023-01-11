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
    const percentage = parseInt(inDietMealsPercentage);

    return (
        <DietOverallContainer percentage = {percentage}>
            <IconTouchable onPress = {onNavigate}>
                <Icon name = 'arrow-top-right' percentage = {percentage}/>
            </IconTouchable>

            <Title>
                { inDietMealsPercentage}%
            </Title>

            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </DietOverallContainer>
    )

}

export default DietOverall;