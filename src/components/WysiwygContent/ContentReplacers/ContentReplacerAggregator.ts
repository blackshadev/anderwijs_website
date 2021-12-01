import { DOMNode } from 'html-react-parser';
import { ReactElement } from 'react';

export interface Replacer {
    test(location: Location, node: DOMNode): boolean;
    getNode(location: Location, node: DOMNode): ReactElement;
}

export default class ContentReplacerAggregator {
    private replacers: Array<Replacer> = [];

    public get(location: Location, node: DOMNode): false | ReactElement {
        for (const r of this.replacers) {
            if (r.test(location, node)) {
                return r.getNode(location, node);
            }
        }

        return false;
    }

    public add(replacer: Replacer): void {
        this.replacers.push(replacer);
    }
}
