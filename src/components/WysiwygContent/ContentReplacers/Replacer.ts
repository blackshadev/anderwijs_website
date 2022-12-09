import { Element } from 'html-react-parser';
import { ReactElement } from 'react';

export interface Replacer {
    acceptsRoute(location: Location): boolean;
    supportsNode(node: Element): boolean;
    getNode(node: Element): ReactElement;
}
