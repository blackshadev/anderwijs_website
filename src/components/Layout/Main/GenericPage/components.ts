import styled, { css } from 'styled-components';
import { fromSize } from '../../../../styling/screenSizes';
import spacing from '../../../../styling/spacing';

export const SplitPanel = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > div,
    & > section {
        flex: 1 1 0%;
        min-width: 100%;

        ${fromSize.sm(css`
            min-width: auto;
            margin-right: ${spacing.xl};
            &:last-child {
                min-width: 370px;
            }
        `)}

        &:last-child {
            flex: 0 1 0%;
            margin: 0;
        }
    }
`;

export const ContentContainer = styled.div``;
