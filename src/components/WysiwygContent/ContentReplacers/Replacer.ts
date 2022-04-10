import { DOMNode } from 'html-react-parser';
import { ReactElement } from 'react';

export interface Replacer {
    acceptsRoute(location: Location): boolean;
    supportsNode(node: DOMNode): boolean;
    getNode(node: DOMNode): ReactElement;
}
