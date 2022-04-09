import { ContentReplacerCollection } from './ContentReplacerCollection';
import { Replacer } from './Replacer';

export default class ContentReplacerAggregator {
    private replacers: Array<Replacer> = [];

    public getReplacers(location: Location): ContentReplacerCollection {
        return ContentReplacerCollection.fromIterable(
            this.filterReplacers(location),
        );
    }

    public add(replacer: Replacer): void {
        this.replacers.push(replacer);
    }

    private *filterReplacers(location: Location): Iterable<Replacer> {
        for (const replacer of this.replacers) {
            if (replacer.acceptsRoute(location)) {
                yield replacer;
            }
        }
    }
}
