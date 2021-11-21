import React from 'react';
import { FooterContainer, FooterWrapper } from './components';
import Socials from './Socials/Socials';
import TrustPilot from './Trustpilot/Trustpilot';

const FooterText: React.FunctionComponent = () => {
    return (
        <div>
            © 2021 Vereniging Anderwijs. KvK: 40480422. Contact:
            <a href="mailto:info@anderwijs.nl"> info@anderwijs.nl</a>.
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
