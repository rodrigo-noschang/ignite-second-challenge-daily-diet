import { ProfileHeaderContainer, LogoImage, ProfileImage } from "./styles";

import Logo from '@assets/Logo.png';
import Profile from '@assets/Profile.png';

const ProfileHeader = () => {
    return (
        <ProfileHeaderContainer>
            <LogoImage source = { Logo }/>
            <ProfileImage source = { Profile }/>
        </ProfileHeaderContainer>
    )
    
}

export default ProfileHeader;