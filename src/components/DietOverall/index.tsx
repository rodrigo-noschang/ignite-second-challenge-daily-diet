import { DietOverallContainer, 
    IconTouchable, 
    Icon, 
    Title, 
    SubTitle } from './styles';

type Props = {
    inDietMealsPercentage: string
}

const DietOverall = ({ inDietMealsPercentage }: Props) => {

    return (
        <DietOverallContainer>
            <IconTouchable>
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