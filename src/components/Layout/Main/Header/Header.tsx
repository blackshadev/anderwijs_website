import React from 'react';
import Navigation from '../../../Navigation';
import { HeaderContainer, HeaderWrapper } from './components';
import HeaderLogo from './HeaderLogo';

type Props = {
    withBorder: boolean;
    location: Location;
};

const Header: React.FunctionComponent<Props> = ({ withBorder, location }) => {
    return (
        <HeaderWrapper>
            <HeaderContainer withBorder={withBorder}>
                <HeaderLogo />
                <Navigation location={location} />
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
