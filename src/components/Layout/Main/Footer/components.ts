import styled, { css } from 'styled-components';
import image from '../../../../images/header.gif';
import { fromSize } from '../../../../styling/screenSizes';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container/Container';

export const FooterFlagImg = styled.img`
    vertical-align: middle;
    margin-right: ${spacing.xs};
`;

export const FooterWrapper = styled.footer`
    margin-bottom: ${spacing.lg};
`;

export const FooterContainer = styled(Container)`
    background: url(${image}) no-repeat 50% 0%;
    padding-top: ${spacing.lg};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        min-width: 100%;
        margin-bottom: ${spacing.md};

        ${fromSize.sm(
            css`
                min-width: auto;
            `,
        )}
    }
`;
