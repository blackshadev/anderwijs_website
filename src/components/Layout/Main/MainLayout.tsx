import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Helmet } from 'react-helmet';
import SkipToContent from '../../../components/SkipToContent';
import { SkipToContentContext } from '../../SkipToContent/SkipToContent';
import GlobalStyle from '../GlobalStyle';
import { Main } from './components';
import Content from './Content';
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
        <GoogleReCaptchaProvider
            useRecaptchaNet
            reCaptchaKey={process.env.GATSBY_RECAPTCHA_KEY}
            scriptProps={{ async: true, defer: true, appendTo: 'body' }}
        >
            <GlobalStyle />
            <Helmet />
            <SkipToContentContext.Provider value="main-content">
                <SkipToContent />
                <Header location={location} withBorder={withHeaderBorder} />
                <Main>
                    <Content>{children}</Content>
                </Main>
                <Footer />
            </SkipToContentContext.Provider>
        </GoogleReCaptchaProvider>
    </React.Fragment>
);

export default MainLayout;
