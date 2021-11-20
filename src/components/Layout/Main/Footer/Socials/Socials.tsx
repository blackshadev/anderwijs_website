import React from 'react';
import { SocialContainer, SocialIcons, SocialText } from './components';
import { Facebook, Instagram, Twitter, Youtube } from './SocialIcons';

const Socials: React.FunctionComponent = () => {
    return (
        <SocialContainer>
            <SocialText>Hoe sjaal? Sociaal!</SocialText>
            <SocialIcons>
                <Facebook handle="Anderwijs" />
                <Twitter handle="Anderwijs" />
                <Youtube channelId="UC5q9ebHFOG01hyBzUQ-i37A" />
                <Instagram handle="anderwijsbijleskampen" />
            </SocialIcons>
        </SocialContainer>
    );
};

export default Socials;
