import * as React from 'react';

import { Element } from 'html-react-parser';
import { ReactElement } from 'react';
import { Replacer } from './Replacer';
import HomeUpcomingEventsPreview from '../../HomeUpcomingEventsPreview';

export default class AddUpcomingEventTile implements Replacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/';
    }

    public supportsNode(node: Element): boolean {
        return (
            node.type === 'tag' &&
            node.name === 'span' &&
            node.attribs?.['data-replacer'] === 'upcoming-event-tile'
        );
    }

    public getNode(node: Element): ReactElement {
        const eventIndex = parseInt(node.attribs['data-replacer-event']);
        return <HomeUpcomingEventsPreview eventIndex={eventIndex} />;
    }
}
