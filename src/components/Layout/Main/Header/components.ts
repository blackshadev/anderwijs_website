import styled, { css } from 'styled-components';
import spacing from '../../../../styling/spacing';
import React from 'react';
import image from '../../../../images/header.gif';
import { fromSize } from '../../../../styling/screenSizes';
import { ContainerCss } from '../../../Container/components';

export const HeaderWrapper = styled.header`
    ${ContainerCss}
    margin-bottom: ${spacing.md};
`;

export const StyledImg = styled.img`
    object-fit: contain;
    width: 100%;

    ${fromSize.sm(css`
        width: 140px;
        margin-right: ${spacing.md};
        position: relative;
        top: 5px;
    `)}

    ${fromSize.md(
        css`
            margin-right: ${spacing.xl};
            width: 220px;
            position: relative;
            top: 7px;
        `,
    )}

    ${fromSize.lg(
        css`
            width: 270px;
            position: relative;
            top: 8px;
        `,
    )}
`;

const withBackground = css`
    background: url(${image}) no-repeat 50% 100%;
`;

export const HeaderContainer = styled.div<{ withBorder: boolean }>`
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
