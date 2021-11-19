import { Breadcrumb } from '../types/Breadcrumb';
import { PageInfo } from '../types/PageData';

export function breadcrumbsForPage(pageData: PageInfo): Breadcrumb[] {
    let pointer: undefined | PageInfo = pageData;

    const breadcrumbs: Breadcrumb[] = [];
    while (pointer) {
        breadcrumbs.unshift({
            title: pointer.title,
            uri: pointer.uri,
        });

        pointer = pointer.parent?.node;
    }
    breadcrumbs.unshift({
        title: 'Home',
        uri: '/',
    });

    return breadcrumbs;
}
