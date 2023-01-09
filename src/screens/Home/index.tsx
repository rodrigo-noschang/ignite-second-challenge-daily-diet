import { HomeContainer, MealsText } from './styles';

import ProfileHeader from '@components/ProfileHeader';
import DietOverall from '@components/DietOverall';
import ActionButton from '@components/ActionButton';

const Home = () => {

    return (
        <HomeContainer>  
            <ProfileHeader /> 
            <DietOverall />

            <MealsText> Refeições </MealsText>

            <ActionButton 
                buttonType = 'DARK' 
                title = 'Nova Refeição'
                iconName = 'plus'
            />
        </HomeContainer>
    )
}

export default Home;