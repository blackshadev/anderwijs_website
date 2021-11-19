import React, { createContext, useContext, useState } from 'react';
import { MenuItem as MenuItemInput } from '../../support/types/Menu';
import MenuLink from './MenuLink';

export type Props = {
    item: MenuItemInput;
};

const MenuFocusContext = createContext<{
    focussed: boolean;
    setFocussed(v: boolean): void;
}>({
    focussed: false,
    setFocussed(v: boolean): void {},
});

const SubMenu: React.FunctionComponent<{ items: MenuItemInput[] }> = ({
    items,
}) => {
    const { focussed } = useContext(MenuFocusContext);

    return (
        <ul className={focussed ? 'focussed' : ''}>
            {items.map((subItem) => (
                <MenuItem key={subItem.key} item={subItem} />
            ))}
        </ul>
    );
};

const MenuItem: React.FunctionComponent<Props> = ({ item }) => {
    const { setFocussed: setParentFocus } = useContext(MenuFocusContext);
    const [focussed, setFocussed] = useState(false);

    return (
        <li>
            <MenuLink
                onFocus={() => setParentFocus(true)}
                onBlur={() => setParentFocus(false)}
                item={item}
            />
            {item.items.length > 0 && (
                <MenuFocusContext.Provider value={{ focussed, setFocussed }}>
                    <SubMenu items={item.items} />
                </MenuFocusContext.Provider>
            )}
        </li>
    );
};

export default MenuItem;
