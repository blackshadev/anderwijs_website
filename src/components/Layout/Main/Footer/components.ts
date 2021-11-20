import styled from 'styled-components';
import image from '../../../../images/header.gif';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container/Container';

export const FooterWrapper = styled.footer``;

export const FooterContainer = styled(Container)`
    background: url(${image}) no-repeat 50% 0%;
    padding-top: ${spacing.lg};

    display: flex;
    justify-content: space-between;

    div {
    }
`;
