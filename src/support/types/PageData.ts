export type PageData = {
    content: string;
    slug: string;
    seo: {
        fullHead: string;
    };
} & PageInfo;

export type PageInfo = {
    uri: string;
    title: string;
    parent?: null | {
        node: PageInfo;
    };
};
