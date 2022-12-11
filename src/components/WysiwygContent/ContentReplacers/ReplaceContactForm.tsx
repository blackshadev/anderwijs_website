import React, { ReactElement } from 'react';
import { Element } from 'html-react-parser';
import { Replacer as ContentReplacer } from './Replacer';
import ContactForm from '../../ContactForm';

export default class ReplaceContactForm implements ContentReplacer {
    public acceptsRoute(location: Location): boolean {
        return location.pathname === '/contact/contactgegevens/';
    }

    public supportsNode(node: Element): boolean {
        return (
            node.type === 'tag' &&
            node.name === 'span' &&
            node.attribs['data-replacer'] === 'contact-form'
        );
    }

    public getNode(): ReactElement {
        return <ContactForm />;
    }
}
