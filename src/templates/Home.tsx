import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent/WysiwygContent';
import MainLayout from '../components/Layout/Main/MainLayout';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import YoastSeo from '../components/Seo';

type PageData = {
    title: string;
    content: string;
    seo: {
        fullHead: string;
    };
};

type Props = {
    path: string;
    data: {
        page: PageData;
    };
    location: Location;
};

const Home: React.FunctionComponent<Props> = ({
    data: { page },
    path,
    location,
}) => {
    return (
        <MainLayout location={location} withHeaderBorder={false}>
            <YoastSeo html={page.seo.fullHead} lang="nl" path={path} />
            <HomeHeader />
            <WysiwygContent content={page.content} location={location} />
        </MainLayout>
    );
};

export default Home;

export const query = graphql`
    query ($id: String!) {
        page: wpPage(id: { eq: $id }) {
            title
            content
            seo {
                fullHead
            }
        }
    }
`;
