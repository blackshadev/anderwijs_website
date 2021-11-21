import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent/WysiwygContent';
import MainLayout from '../components/Layout/Main/MainLayout';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import image1 from '../images/home-header/bijles-1a.jpg';
import image2 from '../images/home-header/bijles-4a.jpg';
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
};

const Home: React.FunctionComponent<Props> = ({ data: { page }, path }) => {
    const images = [image1, image2].map((path) => {
        return (
            <img
                key={path}
                src={path}
                alt="Een blik bij ons op kamp"
                aria-hidden={true}
            />
        );
    });

    return (
        <MainLayout withHeaderBorder={false}>
            <YoastSeo html={page.seo.fullHead} lang="nl" path={path} />
            <HomeHeader images={images} />
            <WysiwygContent content={page.content} />
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
