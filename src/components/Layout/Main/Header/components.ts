import styled, { css } from 'styled-components';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container';
import React from 'react';
import image from '../../../../images/header.gif';
import withProps from '../../../../support/styling/withProps';
import { fromSize } from '../../../../styling/screenSizes';

const withBackground = css`
    background: url(${image}) no-repeat 50% 100%;
`;

export const HeaderContainer = withProps<
    React.PropsWithChildren<{ withBorder: boolean }>
>()(styled(Container))`
    display: flex;
    align-items: flex-end;
    padding-bottom: ${spacing.lg};
    
    ${(props: React.PropsWithChildren<{ withBorder: boolean }>) => {
        if (props.withBorder) {
            return withBackground;
        }
    }}
`;

export const HeaderWrapper = styled.header`
    margin-bottom: ${spacing.md};
`;

export const StyledImg = styled.img`
    object-fit: contain;
    margin-right: ${spacing.md};
    width: 140px;

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
