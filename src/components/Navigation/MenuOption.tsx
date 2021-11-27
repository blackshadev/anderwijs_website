import React from 'react';
import { MenuItem } from '../../support/types/Menu';

type Props = {
    depth: number;
    item: MenuItem;
};

const MenuOption: React.FunctionComponent<Props> = ({ depth, item }) => {
    const prefix = '-'.repeat(depth);

    return (
        <>
            <option value={item.path}>
                {prefix} {item.label}
            </option>
            {item.items.map((subItem) => (
                <MenuOption
                    key={subItem.key}
                    depth={depth + 1}
                    item={subItem}
                />
            ))}
        </>
    );
};

export default MenuOption;
