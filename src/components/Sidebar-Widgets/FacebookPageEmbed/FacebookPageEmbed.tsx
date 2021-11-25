import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
    page: string;
    title: string;
};

const FacebookPageEmbed: React.FunctionComponent<Props> = ({ page, title }) => {
    const url = `https://www.facebook.com/${page}`;
    return (
        <>
            <Helmet>
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"
                    nonce="xXG7hMr1"
                ></script>
            </Helmet>
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href={url}
                data-tabs=""
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
            >
                <blockquote cite={url} className="fb-xfbml-parse-ignore">
                    <a href={url}>{title}</a>
                </blockquote>
            </div>
        </>
    );
};

export default FacebookPageEmbed;
