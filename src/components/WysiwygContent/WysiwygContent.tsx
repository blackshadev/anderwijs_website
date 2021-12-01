import React, { useContext } from 'react';
import { SkipToContentContext } from '../SkipToContent/SkipToContent';
import { Content } from './components';
import parse from 'html-react-parser';
import contentReplacers from './ContentReplacers';

type Props = {
    content: string;
    location: Location;
};

const WysiwygContent: React.FunctionComponent<Props> = ({
    content,
    location,
}) => {
    const targetId = useContext(SkipToContentContext);

    const htmlContent = parse(content, {
        replace(domNode) {
            return contentReplacers.get(location, domNode);
        },
    });
    return <Content id={targetId}>{htmlContent}</Content>;
};

export default WysiwygContent;
