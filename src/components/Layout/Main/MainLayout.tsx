import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../GlobalStyle';
import Content from './Content/Content';
import Footer from './Footer';
import Header from './Header';

type Props = React.PropsWithChildren<Record<string, unknown>>;

const MainLayout: React.FunctionComponent<Props> = ({ children }) => (
    <React.Fragment>
        <GlobalStyle />
        <Helmet />
        <Header />
        <Content>{children}</Content>
        <Footer />
    </React.Fragment>
);

export default MainLayout;
