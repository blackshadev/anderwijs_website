import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent/WysiwygContent';
import { PageData } from '../support/types/PageData';
import GenericPage from '../components/Layout/Main/GenericPage';
import MemberUpcomingEvents from '../components/MemberUpcomingEvents';

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
        <GenericPage location={location} page={page} path={path}>
            <WysiwygContent content={page.content} location={location} />
            <MemberUpcomingEvents />
        </GenericPage>
    );
};

export default Page;

export const query = graphql`
    #fragment PageRecursive on WpPage {
    #    parent: wpParent {
    #        node {
    #            ... on WpPage {
    #                ...PageFields
    #                parent: wpParent {
    #                    node {
    #                        ... on WpPage {
    #                            ...PageFields
    #                            parent: wpParent {
    #                                node {
    #                                    ... on WpPage {
    #                                        ...PageFields
    #                                    }
    #                                }
    #                            }
    #                        }
    #                    }
    #                }
    #            }
    #        }
    #    }
    #}

    #fragment PageFields on WpPage {
    #    uri
    #    title
    #}

    query ($id: String!) {
        page: wpPage(id: { eq: $id }) {
            title
            uri
            content
            slug
            seo {
                fullHead
            }
            #...PageRecursive
        }
    }
`;
