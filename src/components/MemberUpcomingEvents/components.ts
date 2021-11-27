import styled, { css } from 'styled-components';
import { fromSize } from '../../styling/screenSizes';
import spacing from '../../styling/spacing';

export const Container = styled.section``;

export const Event = styled.div``;

export const EventDetails = styled.div`
    display: flex;
    flex-wrap: wrap;

    dl {
        width: 100%;
    }

    ${fromSize.md(css`
        dl {
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: 0;
        }
    `)}
`;

export const EventDefinitions = styled.dl`
    dt {
        font-weight: 600;
    }
    dd {
        margin-bottom: ${spacing.sm};
    }
`;
