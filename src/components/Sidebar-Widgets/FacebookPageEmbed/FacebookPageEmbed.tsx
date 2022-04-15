import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
    page: string;
    title: string;
};

const FacebookPageEmbed: React.FunctionComponent<Props> = ({ page, title }) => {
    const url = `https://www.facebook.com/${page}`;
    return (
        <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                url,
            )}&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
            width="300"
            height="130"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        >
            {title}
        </iframe>
    );
};

export default FacebookPageEmbed;
