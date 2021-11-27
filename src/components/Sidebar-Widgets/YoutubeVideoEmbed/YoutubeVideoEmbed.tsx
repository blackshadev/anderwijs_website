import React from 'react';

type Props = {
    videoId: string;
    title: string;
};

const YoutubeVideoEmbed: React.FunctionComponent<Props> = ({
    videoId,
    title,
}) => {
    return (
        <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default YoutubeVideoEmbed;
