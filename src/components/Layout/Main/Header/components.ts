import styled, { css, ThemedStyledFunction } from 'styled-components';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container';
import React from 'react';
import image from '../../../../images/header.gif';
import withProps from '../../../../support/styling/withProps';

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
