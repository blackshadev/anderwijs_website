import React from 'react';
import { breadcrumbsForPage } from '../../../../support/mappers/breadcrumbsMapper';
import { PageData } from '../../../../support/types/PageData';
import Breadcrumbs from '../../../Breadcrumbs/Breadcrumbs';
import PageHeader from '../../../PageHeader/PageHeader';
import YoastSeo from '../../../Seo';
import WidgetsideBar from '../../../Sidebar-Widgets';
import FacebookPageEmbed from '../../../Sidebar-Widgets/FacebookPageEmbed';
import UpcomingEvents from '../../../Sidebar-Widgets/UpcomingEvents';
import Widget from '../../../Sidebar-Widgets/Widget';
import YoutubeVideoEmbed from '../../../Sidebar-Widgets/YoutubeVideoEmbed/YoutubeVideoEmbed';
import MainLayout from '../MainLayout';
import { ContentContainer, SplitPanel } from './components';

type Props = {
    page: PageData;
    path: string;
};

const GenericPage: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
    page,
    path,
    children,
}) => {
    const breadcrumbs = breadcrumbsForPage(page);

    return (
        <MainLayout withHeaderBorder>
            <YoastSeo html={page.seo.fullHead} lang="nl" path={path} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PageHeader page={page} />
            <SplitPanel>
                <ContentContainer>{children}</ContentContainer>
                <WidgetsideBar>
                    <Widget title="Kampagenda">
                        <UpcomingEvents />
                    </Widget>

                    <Widget title="Anderwijs in beeld">
                        <YoutubeVideoEmbed
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
                </WidgetsideBar>
            </SplitPanel>
        </MainLayout>
    );
};

export default GenericPage;
