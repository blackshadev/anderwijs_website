import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../GlobalStyle';
import Content from './Content/Content';
import Footer from './Footer';
import Header from './Header';

type Props = React.PropsWithChildren<{ withHeaderBorder: boolean }>;

const MainLayout: React.FunctionComponent<Props> = ({ children, withHeaderBorder }) => (
    <React.Fragment>
        <GlobalStyle />
        <Helmet />
        <Header withBorder={withHeaderBorder} />
        <Content>{children}</Content>
        <Footer />
    </React.Fragment>
);

export default MainLayout;
