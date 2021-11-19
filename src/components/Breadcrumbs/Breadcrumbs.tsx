import React from 'react';
import { Breadcrumb } from '../../support/types/Breadcrumb';
import { BreadcrumbItem, BreadcrumbList } from './components';

type Props = {
    breadcrumbs: Breadcrumb[];
};

const Breadcrumbs: React.FunctionComponent<Props> = ({ breadcrumbs }) => {
    return (
        <BreadcrumbList>
            {breadcrumbs.map((b) => (
                <BreadcrumbItem key={b.uri}>
                    <a href={b.uri}>{b.title}</a>
                </BreadcrumbItem>
            ))}
        </BreadcrumbList>
    );
};

export default Breadcrumbs;
