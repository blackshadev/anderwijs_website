const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    await createWordpressPages(graphql, createPage);
    await createEventPages(graphql, createPage);
};

async function createWordpressPages(graphql, createPage) {
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
}

function getTemplatePath(page) {
    switch (page.uri) {
        case '/':
            return `./src/templates/Home.tsx`;
        case '/vrijwilligers/ledenagenda/':
            return `./src/templates/Ledenagenda.tsx`;
        default:
            return `./src/templates/Page.tsx`;
    }
}

async function createEventPages(graphql, createPage) {
    const graphQlResult = await graphql(`
        query {
            allAasUpcomingEventsFull {
                nodes {
                    id
                    code
                }
            }
        }
    `);
    if (graphQlResult.errors) {
        throw graphQlResult.errors;
    }

    const {
        data: {
            allAasUpcomingEventsFull: { nodes: allEvents },
        },
    } = graphQlResult;

    allEvents.forEach(({ id, code }) => {
        createPage({
            path: `/events/${code}`,
            component: slash(path.resolve(`./src/templates/Event.tsx`)),
            context: {
                id,
            },
        });
    });
}
