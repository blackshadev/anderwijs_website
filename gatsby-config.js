module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.anderwijs.nl',
        title: 'Anderwijs',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [`open sans`],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: 'https://www.anderwijs.nl/graphql',
                html: {
                    gatsbyImageOptions: {
                        placeholder: 'none',
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
                icon: 'src/images/icon.png',
            },
        },
    ],
};
