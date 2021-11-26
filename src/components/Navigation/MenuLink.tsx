import React from 'react';
import { Link } from 'gatsby';
import { MenuItem } from '../../support/types/Menu';

type Props = {
    item: MenuItem;
    onBlur: (evt: React.FocusEvent) => void;
    onFocus: (evt: React.FocusEvent) => void;
};

type LinkGetProps = {
    isCurrent: boolean;
    isPartiallyCurrent: boolean;
    href: string;
    location: Location;
};

function isSubActive(current: Location, subItems: MenuItem[]): boolean {
    if (subItems.length === 0) {
        return false;
    }

    return (
        subItems.filter(
            (item) =>
                item.path === current.pathname ||
                isSubActive(current, item.items),
        ).length > 0
    );
}

const MenuLink: React.FunctionComponent<Props> = ({
    item,
    onFocus,
    onBlur,
}) => {
    function isActive({
        isCurrent,
        isPartiallyCurrent,
        location,
    }: LinkGetProps) {
        return isCurrent ||
            isPartiallyCurrent ||
            isSubActive(location, item.items)
            ? { className: '--active' }
            : {};
    }

    if (item.path.startsWith('/')) {
        return (
            <Link
                partiallyActive={true}
                to={item.path}
                onFocus={onFocus}
                onBlur={onBlur}
                activeClassName="--active"
                getProps={isActive}
            >
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
