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

    allPages.forEach((page) => {
        const pageComponent = path.resolve(getTemplatePath(page));

        createPage({
            path: page.uri,
            component: slash(pageComponent),
            context: {
                id: page.id,
            },
        });
    });
};

function getTemplatePath(page) {
    switch (page.uri) {
        case '/':
            return `./src/templates/Home.tsx`;
        default:
            return `./src/templates/Page.tsx`;
    }
}
