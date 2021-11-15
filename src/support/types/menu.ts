export type RawMenuItem = {
    id: string;
    label: string;
    path: string;
    parentDatabaseId: number;
};

export type RawMenuQuery = {
    wpMenu: {
        menuItems: {
            nodes: Array<
                RawMenuItem & {
                    childItems: {
                        nodes: Array<RawMenuItem>;
                    };
                }
            >;
        };
    };
};

export type MenuItem = {
    key: string;
    label: string;
    path: string;
    items: MenuItem[];
};

export type Menu = {
    items: MenuItem[];
};
