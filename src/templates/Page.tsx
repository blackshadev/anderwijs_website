import React from 'react';
import { graphql } from 'gatsby';
import WysiwygContent from '../components/WysiwygContent/WysiwygContent';
import MainLayout from '../components/Layout/Main/MainLayout';
import PageHeader from '../components/PageHeader/PageHeader';
import { breadcrumbsForPage } from '../support/mappers/breadcrumbsMapper';
import { PageData } from '../support/types/PageData';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import YoastSeo from '../components/Seo';
import UpcomingEvents from '../components/Sidebar-Widgets/UpcomingEvents';
import styled from 'styled-components';
import spacing from '../styling/spacing';
import Widget from '../components/Sidebar-Widgets/Widget';
import WidgetSidebar from '../components/Sidebar-Widgets';
import Youtube from '../components/Sidebar-Widgets/YoutubeVideoEmbed/YoutubeVideoEmbed';
import FacebookPageEmbed from '../components/Sidebar-Widgets/FacebookPageEmbed';

type Props = {
    data: { page: PageData };
    path: string;
};

const SplitPanel = styled.div`
    display: flex;

    & > div {
        flex: 1;
        margin-right: ${spacing.xl};

        &:last-child {
            flex: 0;
            min-width: 370px;
            margin: 0;
        }
    }
`;

const Page: React.FunctionComponent<Props> = ({ data: { page }, path }) => {
    const breadcrumbs = breadcrumbsForPage(page);

    return (
        <MainLayout withHeaderBorder>
            <YoastSeo html={page.seo.fullHead} lang="nl" path={path} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PageHeader page={page} />
            <SplitPanel>
                <WysiwygContent content={page.content} />
                <WidgetSidebar>
                    <Widget title="Kampagenda">
                        <UpcomingEvents />
                    </Widget>

                    <Widget title="Anderwijs in beeld">
                        <Youtube
                            title="Anderwijs in beeld"
                            videoId="wHu8itM2xTQ"
                        />
                    </Widget>

                    <Widget title="Anderwijs op Facebook">
                        <FacebookPageEmbed
                            page="anderwijs"
                            title="Anderwijs - bijleskampen: leren en vakantie in één"
                        />
                    </Widget>
                </WidgetSidebar>
            </SplitPanel>
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
