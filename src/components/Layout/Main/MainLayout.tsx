import React from 'react';
import { Helmet } from 'react-helmet';
import SkipToContent from '../../../components/SkipToContent';
import { SkipToContentContext } from '../../SkipToContent/SkipToContent';
import GlobalStyle from '../GlobalStyle';
import Content from './Content/Content';
import Footer from './Footer';
import Header from './Header';

type Props = React.PropsWithChildren<{
    withHeaderBorder: boolean;
    location: Location;
}>;

const MainLayout: React.FunctionComponent<Props> = ({
    children,
    withHeaderBorder,
    location,
}) => (
    <React.Fragment>
        <GlobalStyle />
        <Helmet />
        <SkipToContentContext.Provider value="main-content">
            <SkipToContent />
            <Header location={location} withBorder={withHeaderBorder} />
            <Content>{children}</Content>
            <Footer />
        </SkipToContentContext.Provider>
    </React.Fragment>
);

export default MainLayout;
