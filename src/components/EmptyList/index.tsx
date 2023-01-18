import { EmptyListContainer, 
    EmptyListImage, 
    EmptyListTitle, 
    EmptyListSubtitle } from './styles';

import EmptyIconImage from '@assets/empty-icon.png';

const EmptyList = () => {
    return (
        <EmptyListContainer>
            <EmptyListImage source = {EmptyIconImage}/>

            <EmptyListTitle>
                Você ainda não possui refeições cadastradas!
            </EmptyListTitle>

            <EmptyListSubtitle>
                Clique em Nova refeição e comece a registrar sua dieta =)
            </EmptyListSubtitle>
        </EmptyListContainer>
    )

}

export default EmptyList;