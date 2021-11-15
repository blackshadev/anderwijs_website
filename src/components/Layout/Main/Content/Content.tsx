import React from 'react';
import Container from '../../../Container';

type Props = React.PropsWithChildren<Record<string, unknown>>;

const Content: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <main>
            <Container>{children}</Container>
        </main>
    );
};

export default Content;
