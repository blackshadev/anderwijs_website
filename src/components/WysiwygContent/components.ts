import styled from 'styled-components';
import colors from '../../styling/colors';
import spacing from '../../styling/spacing';

export const Content = styled.div`
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

    p {
        text-align: justify;
    }

    .table td {
        padding: ${spacing.sm};
        line-height: 18px;
        text-align: left;
        vertical-align: top;
        border-top: 1px solid ${colors.lightGrey};
    }

    .gatsby-image-wrapper.full-width {
        width: 100%;
    }
`;
