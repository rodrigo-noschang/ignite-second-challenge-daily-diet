import { NormalMessage, MessageHighlight } from "./styles";

type Props = {
    isInDiet: boolean
}

const FeedbackSubtitle = ({ isInDiet }: Props) => {

    return (
        isInDiet ? 
            <NormalMessage >
               Você continua<MessageHighlight> dentro da dieta. </MessageHighlight>
               Muito bem!
            </NormalMessage>
        :
            <NormalMessage >
            Você<MessageHighlight> saiu da dieta </MessageHighlight>
            
            dessa vez, mas continua se esforçando e não desista!
        </NormalMessage>
    )
}

export default FeedbackSubtitle;