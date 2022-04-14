import styled, { css } from 'styled-components';
import containerSizes from '../../styling/containerSizes';
import { fromSize } from '../../styling/screenSizes';
import spacing from '../../styling/spacing';

export const ContainerCss = css`
    width: ${containerSizes.xs};
    margin: 0 auto;

    ${fromSize.sm(
        css`
            width: ${containerSizes.sm};
        `,
    )}

    ${fromSize.md(
        css`
            width: ${containerSizes.md};
        `,
    )}

    ${fromSize.lg(
        css`
            width: ${containerSizes.lg};
        `,
    )}
`;

export const ContainerContentCss = css`
    margin: 0 ${spacing.sm};

    ${fromSize.md(
        css`
            margin: 0;
        `,
    )};
`;
