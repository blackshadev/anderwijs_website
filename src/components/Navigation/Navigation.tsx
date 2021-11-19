import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { mapMenu } from '../../support/mappers/menuMapper';
import { RawMenuQuery } from '../../support/types/Menu';
import { NavContainer } from './components';
import MenuItem from './MenuItem';

const MENU_QUERY = graphql`
    query MainMenuQuery {
        wpMenu(locations: { eq: HEADER_MENU }) {
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

const Navigation: React.FunctionComponent = () => {
    const wpMenu = useStaticQuery<RawMenuQuery>(MENU_QUERY);

    const menu = mapMenu(wpMenu);

    return (
        <NavContainer>
            <ul>
                {menu.items.map((item) => (
                    <MenuItem key={item.key} item={item} />
                ))}
            </ul>
        </NavContainer>
    );
};

export default Navigation;
