/* eslint-disable */

const AasCalSchema = `
    id: Int
    naam: String
    code: String
    voordag_tekst: String
    datum_voordag: String
    tijd_voordag: String
    weekdag_start: String
    datum_start: String
    tijd_start: String
    weekdag_eind: String
    datum_eind: String
    tijd_eind: String
    aantal_dagen: Int
    kamphuis_naam: String
    kamphuis_adres: String
    kamphuis_postcode: String
    kamphuis_plaats: String
    kamphuis_telefoon: String
    kamphuis_website: String
    kamphuis_mapslink: String
    prijs: String
    beschrijving: String
    kleur: String
`;

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL,
        title: 'Anderwijs',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [`open sans`],
            },
        },
        {
            resolve: 'gatsby-source-custom-api',
            options: {
                url: `${process.env.AAS_URL}/cal/part`,
                rootKey: 'aasUpcomingEvents',
                schemas: {
                    aasUpcomingEvents: AasCalSchema,
                },
            },
        },
        {
            resolve: 'gatsby-source-custom-api',
            options: {
                url: `${process.env.AAS_URL}/cal/full`,
                rootKey: 'aasUpcomingEventsFull',
                schemas: {
                    aasUpcomingEventsFull: AasCalSchema,
                },
            },
        },
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: process.env.GRAPHQL_URL,
                html: {
                    fallbackImageMaxWidth: null,
                    gatsbyImageOptions: {
                        placeholder: 'none',
                    },
                },
                type: {
                    Page: {
                        beforeChangeNode: './updateWordpressPages.js',
                    },
                },
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                },
            },
        },
        `gatsby-transformer-sharp`,

        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.jpg',
            },
        },
        'gatsby-plugin-robots-txt',
    ],
};
