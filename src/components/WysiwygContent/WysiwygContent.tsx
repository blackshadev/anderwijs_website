import React from 'react';
import { Content } from './components';

type Props = {
    content: string;
};

const WysiwygContent: React.FunctionComponent<Props> = ({ content }) => {
    return <Content dangerouslySetInnerHTML={{ __html: content }}></Content>;
};

export default WysiwygContent;
