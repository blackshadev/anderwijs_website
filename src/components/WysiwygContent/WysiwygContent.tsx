import React, { useContext } from 'react';
import { SkipToContentContext } from '../SkipToContent/SkipToContent';
import { Content } from './components';

type Props = {
    content: string;
};

const WysiwygContent: React.FunctionComponent<Props> = ({ content }) => {
    const targetId = useContext(SkipToContentContext);
    return (
        <Content
            id={targetId}
            dangerouslySetInnerHTML={{ __html: content }}
        ></Content>
    );
};

export default WysiwygContent;
