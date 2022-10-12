import * as React from 'react';

import { DOMNode, Element } from 'html-react-parser';
import { ReactElement } from 'react';
import { Replacer } from './Replacer';
import HomeUpcomingEventsPreview from '../../HomeUpcomingEventsPreview';

export default class AddUpcomingEventTile implements Replacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/';
    }

    public supportsNode(node: DOMNode): boolean {
        return (
            node instanceof Element &&
            node.tagName === 'span' &&
            node.attribs['data-replacer'] === 'upcoming-event-tile'
        );
    }

    public getNode(node: DOMNode): ReactElement {
        if (!(node instanceof Element)) {
            return <></>;
        }

        const eventIndex = parseInt(node.attribs['data-replacer-event']);
        return <HomeUpcomingEventsPreview eventIndex={eventIndex} />;
    }
}
