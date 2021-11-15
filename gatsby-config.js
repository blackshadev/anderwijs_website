module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.anderwijs.nl',
        title: 'Anderwijs',
    },
    plugins: [
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: 'https://www.anderwijs.nl/graphql',
            },
        },
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [`open sans`],
                display: 'swap',
            },
        },
        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
