import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    .hr {
        width: 100%auto;
        border-top: 1px solid #000;
    }
    .row {
        display: flex;
    }
`;

const WysiwygContent = ({ content }: { content: string }) => {
    return <Content dangerouslySetInnerHTML={{ __html: content }}></Content>;
};

export default WysiwygContent;
