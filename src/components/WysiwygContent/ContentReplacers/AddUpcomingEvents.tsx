import React, { ReactElement } from 'react';
import UpcomingEvents from '../../UpcomingEvents';
import { Replacer } from './Replacer';

export default class AddUpcomingEvents implements Replacer {
    private isFirst = true;
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/onze-bijleskampen/kampagenda/';
    }

    public supportsNode(): boolean {
        return true;
    }

    public getNode(): ReactElement {
        if (!this.isFirst) {
            return <></>;
        }

        this.isFirst = false;
        return <UpcomingEvents />;
    }
}
