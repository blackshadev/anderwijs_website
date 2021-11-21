import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent/WysiwygContent';
import MainLayout from '../components/Layout/Main/MainLayout';
import PageHeader from '../components/PageHeader/PageHeader';
import { breadcrumbsForPage } from '../support/mappers/breadcrumbsMapper';
import { PageData } from '../support/types/PageData';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import YoastSeo from '../components/Seo';

type Props = { data: { page: PageData } };

const Page: React.FunctionComponent<Props> = ({ data: { page } }) => {
    const breadcrumbs = breadcrumbsForPage(page);

    return (
        <MainLayout withHeaderBorder>
            <YoastSeo html={page.seo.fullHead} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PageHeader page={page} />
            <WysiwygContent content={page.content} />
        </MainLayout>
    );
};

export default Page;

export const query = graphql`
    fragment PageRecursive on WpPage {
        parent: wpParent {
            node {
                ... on WpPage {
                    ...PageFields
                    parent: wpParent {
                        node {
                            ... on WpPage {
                                ...PageFields
                                parent: wpParent {
                                    node {
                                        ... on WpPage {
                                            ...PageFields
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    fragment PageFields on WpPage {
        uri
        title
    }

    query ($id: String!) {
        page: wpPage(id: { eq: $id }) {
            title
            uri
            content
            slug
            seo {
                fullHead
            }
            ...PageRecursive
        }
    }
`;
