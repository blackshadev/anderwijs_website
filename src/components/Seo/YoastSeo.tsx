import React from 'react';
import { Helmet } from 'react-helmet';
import parse, { Element } from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';

const SITE_QUERY = graphql`
    query SEO {
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`;

type Props = {
    html: string;
    lang: string;
    path: string;
};

const YoastSeo: React.FunctionComponent<Props> = ({ html, lang, path }) => {
    const siteMetadata = useStaticQuery<{
        site: { siteMetadata: { siteUrl: string } };
    }>(SITE_QUERY);

    const siteUrl = siteMetadata.site.siteMetadata.siteUrl;

    const htmlContent = parse(html, {
        replace(domNode) {
            if (domNode instanceof Element && domNode.attribs) {
                if (
                    domNode.tagName === 'link' &&
                    domNode.attribs.rel === 'canonical'
                ) {
                    return <link rel="canonical" href={`${siteUrl}${path}`} />;
                }
            }
            return false;
        },
    });

    return <Helmet htmlAttributes={{ lang }}>{htmlContent}</Helmet>;
};

export default YoastSeo;
