import { Menu, MenuItem, RawMenuItem, RawMenuQuery } from '../types/menu';

export function mapMenu(menu: RawMenuQuery): Menu {
    function mapItem(
        menuItem: RawMenuItem & {
            childItems?: {
                nodes: Array<RawMenuItem>;
            };
        },
    ): MenuItem {
        return {
            key: menuItem.id,
            label: menuItem.label,
            path: menuItem.path,
            items: menuItem.childItems?.nodes.map(mapItem) ?? [],
        };
    }

    function filterChildItems(item: RawMenuItem): boolean {
        return !item.parentDatabaseId;
    }

    return {
        items: menu.wpMenu.menuItems.nodes
            .filter(filterChildItems)
            .map(mapItem),
    };
}
