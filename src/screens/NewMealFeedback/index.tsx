import { useRoute, useNavigation } from '@react-navigation/native';

import { NewMealFeedbackContainer,
    FeedBackTitle, 
    FeedBackImage, } from './styles';

import InDietImage from '@assets/In-diet.png';
import OuOfDietImage from '@assets/Out-diet.png';

import ActionButton from '@components/ActionButton';
import FeedbackSubtitle from '@components/FeedBackSubtitle';

type RouteParamProps = {
    inDiet: boolean,
    title: string, 
    subTitle: string
}

const NewMealFeedback = () => {
    const route = useRoute();
    const { inDiet, title } = route.params as RouteParamProps;

    const navigate = useNavigation();

    const handleReturnHome = () => {
        navigate.navigate('home');
    }

    return (
        <NewMealFeedbackContainer>
            <FeedBackTitle isInDiet = {inDiet}>
                {title}
            </FeedBackTitle>

            <FeedbackSubtitle isInDiet = {inDiet} />

            <FeedBackImage 
                source = { inDiet ? InDietImage : OuOfDietImage}
            />

            <ActionButton 
                buttonType = 'DARK'
                title = 'Ir para a página inicial'
                onPress = {handleReturnHome}
            />
        </NewMealFeedbackContainer>
    )

}

export default NewMealFeedback;