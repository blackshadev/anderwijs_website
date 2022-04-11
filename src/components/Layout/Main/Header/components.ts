import styled, { css } from 'styled-components';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container';
import React from 'react';
import image from '../../../../images/header.gif';
import withProps from '../../../../support/styling/withProps';
import { fromSize } from '../../../../styling/screenSizes';

export const HeaderWrapper = styled.header`
    margin-bottom: ${spacing.md};
`;

export const StyledImg = styled.img`
    object-fit: contain;
    width: 100%;

    ${fromSize.sm(css`
        width: 140px;
        margin-right: ${spacing.md};
    `)}

    ${fromSize.md(
        css`
            margin-right: ${spacing.xl};
            width: 220px;
        `,
    )}

    ${fromSize.lg(
        css`
            width: 270px;
        `,
    )}
`;

const withBackground = css`
    background: url(${image}) no-repeat 50% 100%;
`;

export const HeaderContainer = withProps<
    React.PropsWithChildren<{ withBorder: boolean }>
>()(styled(Container))`
    display: flex;
    align-items: flex-end;
    padding-bottom: ${spacing.lg};
    flex-wrap: wrap;
    
    ${(props: React.PropsWithChildren<{ withBorder: boolean }>) => {
        if (props.withBorder) {
            return withBackground;
        }
    }}
`;
