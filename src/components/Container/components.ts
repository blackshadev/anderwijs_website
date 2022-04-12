import styled, { css } from 'styled-components';
import containerSizes from '../../styling/containerSizes';
import { fromSize } from '../../styling/screenSizes';

export const StyledContainer = styled.main`
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
