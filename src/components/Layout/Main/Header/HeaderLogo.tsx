import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../../../images/anderwijs_header.png';
import spacing from '../../../../styling/spacing';

const StyledImg = styled.img`
    width: 270px;
    object-fit: contain;
    margin-right: ${spacing.xl};
`;

const HeaderLogo: React.FunctionComponent = () => {
    return (
        <Link to="/">
            <StyledImg src={logo} alt="Anderwijs logo" />
        </Link>
    );
};

export default HeaderLogo;
