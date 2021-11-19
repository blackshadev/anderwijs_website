import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent';
import MainLayout from '../components/Layout/Main/MainLayout';
import HomeHeader from '../components/Layout/Home/HomeHeader';
import image1 from '../images/home-header/bijles-1a.jpg';
import image2 from '../images/home-header/bijles-4a.jpg';

type PageData = {
    title: string;
    content: string;
};

const Home = ({ data: { page } }: { data: { page: PageData } }) => {
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
        <MainLayout>
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
        }
    }
`;
