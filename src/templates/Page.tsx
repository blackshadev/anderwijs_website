import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent';
import MainLayout from '../components/Layout/Main/MainLayout';

type PageData = {
    title: string;
    content: string;
};

const Page = ({ data: { page } }: { data: { page: PageData } }) => {
    return (
        <MainLayout>
            <WysiwygContent content={page.content} />
        </MainLayout>
    );
};

export default Page;

export const query = graphql`
    query ($id: String!) {
        page: wpPage(id: { eq: $id }) {
            title
            content
        }
    }
`;
