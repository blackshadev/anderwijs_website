import React from 'react';
import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';

type Props = {
    html: string;
};
const YoastSeo: React.FunctionComponent<Props> = ({ html }) => {
    const htmlContent = parse(html);

    return <Helmet>{htmlContent}</Helmet>;
};

export default YoastSeo;
