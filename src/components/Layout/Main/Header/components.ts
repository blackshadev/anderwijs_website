import styled, { css, ThemedStyledFunction } from 'styled-components';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container';
import React from 'react';
import image from '../../../../images/header.gif';

const withBackground = css`
    background: url(${image}) no-repeat 50% 100%;
`;

function withProps<U>() {
    return <
        P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
        // eslint-disable-next-line
        T extends object,
        O extends Record<string, unknown>,
    >(
        fn: ThemedStyledFunction<P, T, O>,
    ): ThemedStyledFunction<P & U, T, O & U> =>
        fn as unknown as ThemedStyledFunction<P & U, T, O & U>;
}

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
