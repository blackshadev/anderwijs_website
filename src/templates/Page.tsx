import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent';

type PageData = {
    title: string;
    content: string;
};

const Page = ({ data: { page } }: { data: { page: PageData } }) => {
    return <WysiwygContent content={page.content} />;
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
