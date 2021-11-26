import { Link } from 'gatsby';
import React from 'react';
import logo from '../../../../images/anderwijs_header.png';
import { StyledImg } from './components';

const HeaderLogo: React.FunctionComponent = () => {
    return (
        <Link to="/">
            <StyledImg src={logo} alt="Anderwijs logo" />
        </Link>
    );
};

export default HeaderLogo;
