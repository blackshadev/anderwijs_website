import React, { ReactElement } from 'react';
import { DOMNode, Element } from 'html-react-parser';
import { Replacer as ContentReplacer } from './ContentReplacerAggregator';
import ContactForm from '../../ContactForm';

export default class ReplaceContactForm implements ContentReplacer {
    public test(location: Location, node: DOMNode): boolean {
        return (
            location.pathname === '/contact/contactgegevens/' &&
            node instanceof Element &&
            node.tagName === 'form'
        );
    }

    public getNode(location: Location, node: DOMNode): ReactElement {
        return <ContactForm />;
    }
}
