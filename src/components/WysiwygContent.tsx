import React from 'react';
import styled from 'styled-components';
import colors from '../styling/colors';
import spacing from '../styling/spacing';

const Content = styled.div`
    .hr {
        background: ${colors.green};
        height: 8px;
        overflow: hidden;
        margin: 36px 0 31px 0;
        line-height: 0;
        font-size: 0;
    }

    .row {
        display: flex;
    }

    .span3 {
        flex: 1;
        width: 270px;
        margin-left: 30px;
    }

    iframe {
        max-width: 100%;
    }
`;

const WysiwygContent = ({ content }: { content: string }) => {
    return <Content dangerouslySetInnerHTML={{ __html: content }}></Content>;
};

export default WysiwygContent;
