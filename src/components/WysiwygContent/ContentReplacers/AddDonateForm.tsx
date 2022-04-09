import * as React from 'react';

import { DOMNode, Element } from 'html-react-parser';
import { ReactElement } from 'react';
import { Replacer } from './Replacer';
import DonateForm from '../../DonateForm';

export default class AddDonateForm implements Replacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/contact/doneren-aan-anderwijs/';
    }

    public supportsNode(node: DOMNode): boolean {
        return (
            node instanceof Element &&
            node.tagName === 'span' &&
            node.attribs['data-replacer'] === 'donate-form'
        );
    }

    public getNode(node: DOMNode): ReactElement {
        return <DonateForm />;
    }
}
