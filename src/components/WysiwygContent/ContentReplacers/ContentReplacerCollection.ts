import { DOMNode } from 'html-react-parser';
import { ReactElement } from 'react';
import { Replacer } from './Replacer';

export class ContentReplacerCollection {
    public static fromIterable(
        items: Iterable<Replacer>,
    ): ContentReplacerCollection {
        return new this(Array.from(items));
    }

    private constructor(private items: Replacer[]) {}

    public replace(node: DOMNode): false | ReactElement {
        for (const item of this.items) {
            if (item.supportsNode(node)) {
                return item.getNode(node);
            }
        }

        return false;
    }

    public hasItems(): boolean {
        return this.items.length !== 0;
    }
}
