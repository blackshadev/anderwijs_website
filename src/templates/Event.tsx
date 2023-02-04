import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '../components/Layout/Main/MainLayout';
import YoastSeo from '../components/Seo/YoastSeo';

type Props = {
    data: {
        event: {
            naam: string;
            code: string;
            beschrijving: string;
            structured_data: string;
        };
    };
    path: string;
};
const Event: React.FunctionComponent<Props> = ({
    path,
    data: {
        event: { code, naam, beschrijving, structured_data },
    },
}) => {
    return (
        <MainLayout location={location} withHeaderBorder={false}>
            <YoastSeo lang="nl" path={path} html="" />
            <h1>
                {naam} ({code})
            </h1>
            <p>{beschrijving}</p>
            <p>{structured_data}</p>
        </MainLayout>
    );
};

export default Event;

export const query = graphql`
    query ($id: String!) {
        event: aasUpcomingEvents(id: { eq: $id }) {
            naam
            code
            beschrijving
            structured_data
        }
    }
`;
