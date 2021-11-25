import React from 'react';
import { WidgetContainer } from './components';

type Props = React.PropsWithChildren<{ title: string }>;

const Widget: React.FunctionComponent<Props> = ({ title, children }) => {
    return (
        <WidgetContainer>
            <h2>{title}</h2>
            {children}
        </WidgetContainer>
    );
};

export default Widget;
