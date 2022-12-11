import { Element } from 'html-react-parser';
import React, { ReactElement } from 'react';
import UpcomingEvents from '../../UpcomingEvents';
import { Replacer } from './Replacer';

export default class AddUpcomingEvents implements Replacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/onze-bijleskampen/kampagenda/';
    }

    public supportsNode(node: Element): boolean {
        return (
            node.type === 'tag' &&
            node.name === 'span' &&
            node.attribs?.['data-replacer'] === 'upcoming-events'
        );
    }

    public getNode(): ReactElement {
        return <UpcomingEvents />;
    }
}
