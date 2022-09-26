import { DOMNode, Element } from 'html-react-parser';
import React, { ReactElement } from 'react';
import UpcomingEvents from '../../UpcomingEvents';
import { Replacer } from './Replacer';

export default class AddUpcomingEvents implements Replacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/onze-bijleskampen/kampagenda/';
    }

    public supportsNode(node: DOMNode): boolean {
        return (
            node instanceof Element &&
            node.tagName === 'span' &&
            node.attribs['data-replacer'] === 'upcoming-events'
        );
    }

    public getNode(): ReactElement {
        return <UpcomingEvents />;
    }
}
