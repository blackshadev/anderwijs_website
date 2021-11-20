import React from 'react';
import InstagramIcon from './icons/instagram.png';
import FacebookIcon from './icons/facebook.png';
import TwitterIcon from './icons/twitter.png';
import YoutubeIcon from './icons/youtube.png';
import { SocialLink } from './components';

const SocialIcon: React.FunctionComponent<{
    href: string;
    src: string;
    alt: string;
}> = ({ href, src, alt }) => {
    return (
        <SocialLink href={href} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} />
        </SocialLink>
    );
};

export const Instagram: React.FunctionComponent<{ handle: string }> = ({
    handle,
}) => {
    return (
        <SocialIcon
            href={`https://instagram.com/${handle}`}
            src={InstagramIcon}
            alt="Instagram"
        />
    );
};

export const Facebook: React.FunctionComponent<{ handle: string }> = ({
    handle,
}) => {
    return (
        <SocialIcon
            href={`https://facebook.com/${handle}`}
            src={FacebookIcon}
            alt="Facebook"
        />
    );
};

export const Twitter: React.FunctionComponent<{ handle: string }> = ({
    handle,
}) => {
    return (
        <SocialIcon
            href={`https://twitter.com/${handle}`}
            src={TwitterIcon}
            alt="Twitter"
        />
    );
};

export const Youtube: React.FunctionComponent<{ channelId: string }> = ({
    channelId,
}) => {
    return (
        <SocialIcon
            href={`https://youtube.com/channel/${channelId}`}
            src={YoutubeIcon}
            alt="Youtube"
        />
    );
};
