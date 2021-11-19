export type PageData = {
    content: string;
} & PageInfo;

export type PageInfo = {
    uri: string;
    title: string;
    parent?: null | {
        node: PageInfo;
    };
};
