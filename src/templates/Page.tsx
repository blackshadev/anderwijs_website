import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent/WysiwygContent';
import { PageData } from '../support/types/PageData';
import GenericPage from '../components/Layout/Main/GenericPage';

type Props = {
    data: { page: PageData };
    path: string;
    location: Location;
};

const Page: React.FunctionComponent<Props> = ({
    data: { page },
    path,
    location,
}) => {
    return (
        <GenericPage page={page} path={path} location={location}>
            <WysiwygContent content={page.content} />
        </GenericPage>
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
