import React, { ReactElement } from 'react';
import { DOMNode, Element } from 'html-react-parser';
import { Replacer as ContentReplacer } from './Replacer';
import ContactForm from '../../ContactForm';

export default class ReplaceContactForm implements ContentReplacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/contact/contactgegevens/';
    }

    public supportsNode(node: DOMNode): boolean {
        return (
            node instanceof Element &&
            node.tagName === 'span' &&
            node.attribs['data-replacer'] === 'contact-form'
        );
    }

    public getNode(node: DOMNode): ReactElement {
        return <ContactForm />;
    }
}
