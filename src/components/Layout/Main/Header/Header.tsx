import React from 'react';
import Navigation from '../../../Navigation';
import { HeaderContainer, HeaderWrapper } from './components';
import HeaderLogo from './HeaderLogo';

const Header: React.FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLogo />
                <Navigation />
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
