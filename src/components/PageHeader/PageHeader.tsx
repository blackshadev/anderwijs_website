import React from 'react';

type Props = {
    page: {
        title: string;
    };
};

const PageHeader: React.FunctionComponent<Props> = ({ page }) => {
    return (
        <React.Fragment>
            <h1>{page.title}</h1>
        </React.Fragment>
    );
};

export default PageHeader;
