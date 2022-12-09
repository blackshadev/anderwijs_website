import * as React from 'react';

import { Element } from 'html-react-parser';
import { ReactElement } from 'react';
import { Replacer } from './Replacer';
import DonateForm from '../../DonateForm';

export default class AddDonateForm implements Replacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/contact/doneren-aan-anderwijs/';
    }

    public supportsNode(node: Element): boolean {
        return (
            node.type === 'tag' &&
            node.name === 'span' &&
            node.attribs?.['data-replacer'] === 'donate-form'
        );
    }

    public getNode(): ReactElement {
        return <DonateForm />;
    }
}
