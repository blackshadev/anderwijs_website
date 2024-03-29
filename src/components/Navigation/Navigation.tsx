import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { ChangeEvent } from 'react';
import { mapMenu } from '../../support/mappers/menuMapper';
import { RawMenuQuery } from '../../support/types/Menu';
import {
    NavigationDesktop,
    NavContainer,
    NavigationMobile,
} from './components';
import MenuItem from './MenuItem';
import MenuOption from './MenuOption';

const MENU_QUERY = graphql`
    query MainMenuQuery {
        wpMenu {
            menuItems {
                nodes {
                    id
                    label
                    path
                    parentDatabaseId
                    childItems {
                        nodes {
                            path
                            label
                            id
                        }
                    }
                }
            }
        }
    }
`;

type Props = {
    location: Location;
};

function handleSelect(event: ChangeEvent<HTMLSelectElement>): void {
    navigate(event.target.value);
}

const Navigation: React.FunctionComponent<Props> = ({ location }) => {
    const wpMenu = useStaticQuery<RawMenuQuery>(MENU_QUERY);

    const menu = mapMenu(wpMenu);

    return (
        <NavContainer>
            <NavigationDesktop>
                {menu.items.map((item) => (
                    <MenuItem key={item.key} item={item} />
                ))}
            </NavigationDesktop>
            <NavigationMobile
                onChange={handleSelect}
                defaultValue={location.pathname}
            >
                {menu.items.map((item) => (
                    <MenuOption depth={0} key={item.key} item={item} />
                ))}
            </NavigationMobile>
        </NavContainer>
    );
};

export default Navigation;
