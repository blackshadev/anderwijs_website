import React from 'react';
import { Link } from 'gatsby';
import { MenuItem } from '../../support/types/Menu';

type Props = {
    item: MenuItem;
    onBlur: (evt: React.FocusEvent) => void;
    onFocus: (evt: React.FocusEvent) => void;
};

const MenuLink: React.FunctionComponent<Props> = ({
    item,
    onFocus,
    onBlur,
}) => {
    if (item.path.startsWith('/')) {
        return (
            <Link to={item.path} onFocus={onFocus} onBlur={onBlur}>
                {item.label}
            </Link>
        );
    }
    return (
        <a href={item.path} onFocus={onFocus} onBlur={onBlur}>
            {item.label}
        </a>
    );
};

export default MenuLink;
