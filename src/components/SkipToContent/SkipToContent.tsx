import React, { createContext, useContext } from 'react';
import { SkipToContentLink } from './components';

export const SkipToContentContext = createContext<string>('main-content');

const SkipToContent: React.FunctionComponent = () => {
    const target = useContext(SkipToContentContext);

    return (
        <SkipToContentLink href={`#${target}`}>Naar inhoud</SkipToContentLink>
    );
};

export default SkipToContent;
