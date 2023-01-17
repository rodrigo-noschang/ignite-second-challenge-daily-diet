import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type Props = {
    isInDiet: boolean
}

export const NewMealFeedbackContainer = styled(SafeAreaView)`
    flex: 1;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const FeedBackTitle = styled.Text<Props>`
    ${({ theme, isInDiet }) => css`
        color: ${ isInDiet ? theme.COLORS.DARK_GREEN : theme.COLORS.DARK_RED};
        font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    margin-bottom: 10px;
`;

export const FeedBackImage = styled.Image`
    margin-top: 30px;
    margin-bottom: 30px;
`;