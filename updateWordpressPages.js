// Updates forms on Wordpress Pages to post to the original wordpress instance

const ALLOWED_ACTIONS = /CREATE(_ALL)?|UPDATE/i;
const PAGES = {
    '/contact/doneren-aan-anderwijs/': {
        replaceAction: '/contact/doneren-aan-anderwijs/',
    },
};
const FORM_ACTION = /action="[^"]+"/i;

module.exports = async ({ remoteNode, actionType, helpers }) => {
    if (!ALLOWED_ACTIONS.test(actionType)) {
        return;
    }

    if (!PAGES[remoteNode.uri]) {
        return;
    }

    const baseUrl = helpers.getNodesByType('Wp')[0].generalSettings.url;

    const options = PAGES[remoteNode.uri];
    remoteNode.content = remoteNode.content.replace(
        FORM_ACTION,
        `action="${baseUrl}${options.replaceAction}"`,
    );
};
