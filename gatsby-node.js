const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const graphQlResult = await graphql(`
        query {
            allWpPage {
                nodes {
                    id
                    uri
                }
            }
        }
    `);
    if (graphQlResult.errors) {
        throw graphQlResult.errors;
    }

    const {
        data: {
            allWpPage: { nodes: allPages },
        },
    } = graphQlResult;

    const pageTemplate = path.resolve(`./src/templates/Page.tsx`);

    allPages.forEach((page) => {
        createPage({
            path: page.uri,
            component: slash(pageTemplate),
            context: {
                id: page.id,
            },
        });
    });
};
