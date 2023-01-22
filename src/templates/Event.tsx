import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '../components/Layout/Main/MainLayout';
import YoastSeo from '../components/Seo/YoastSeo';

type Props = {
    data: {
        event: {
            code: string;
            naam: string;
        };
    };
    path: string;
};
const Event: React.FunctionComponent<Props> = ({
    path,
    data: {
        event: { code, naam },
    },
}) => {
    return (
        <MainLayout location={location} withHeaderBorder={false}>
            <YoastSeo lang="nl" path={path} html="" />
            <h1>
                {naam} ({code})
            </h1>
        </MainLayout>
    );
};

export default Event;

export const query = graphql`
    query ($id: String!) {
        event: aasUpcomingEventsFull(id: { eq: $id }) {
            naam
            code
        }
    }
`;
