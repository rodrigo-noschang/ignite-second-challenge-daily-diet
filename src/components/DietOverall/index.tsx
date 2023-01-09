import { DietOverallContainer, 
    IconTouchable, 
    Icon, 
    Title, 
    SubTitle } from './styles';

const DietOverall = () => {

    return (
        <DietOverallContainer>
            <IconTouchable>
                <Icon name = 'arrow-top-right'/>
            </IconTouchable>

            <Title>
                90,86%
            </Title>

            <SubTitle>
                das refeições dentro da dieta
            </SubTitle>
        </DietOverallContainer>
    )

}

export default DietOverall;