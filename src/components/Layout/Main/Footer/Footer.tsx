import React from 'react';
import { FooterContainer, FooterFlagImg, FooterWrapper } from './components';
import Socials from './Socials/Socials';
import TrustPilot from './Trustpilot/Trustpilot';
import ukFlag from '../../../../images/uk-flag.png';
import { Link } from 'gatsby';

const FooterText: React.FunctionComponent = () => {
    return (
        <div>
            © 2021 Vereniging Anderwijs. KvK: 40480422. Contact:
            <a href="mailto:info@anderwijs.nl"> info@anderwijs.nl</a>.<br />
            <FooterFlagImg src={ukFlag} alt="UK flag icon"></FooterFlagImg>
            Looking for information in English?{' '}
            <Link to="/contact/information-in-english">Click here!</Link>
        </div>
    );
};

const Footer: React.FunctionComponent = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Socials></Socials>
                <FooterText></FooterText>
                <TrustPilot></TrustPilot>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;
