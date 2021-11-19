import React from 'react';
import Navigation from '../../../Navigation';
import { HeaderContainer, HeaderWrapper } from './components';
import HeaderLogo from './HeaderLogo';

type Props = {
    withBorder: boolean;
};

const Header: React.FunctionComponent<Props> = ({ withBorder }) => {
    return (
        <HeaderWrapper>
            <HeaderContainer withBorder={withBorder}>
                <HeaderLogo />
                <Navigation />
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
