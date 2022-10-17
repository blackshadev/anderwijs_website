import styled, { css } from 'styled-components';
import colors from '../../styling/colors';
import fonts from '../../styling/fonts';
import fontSizes from '../../styling/fontSizes';
import { fromSize } from '../../styling/screenSizes';
import spacing from '../../styling/spacing';
import { notSrOnly, srOnly } from '../../styling/sr';

export const NavigationDesktop = styled.ul`
    display: none;

    ${fromSize.sm(
        css`
            display: flex;
        `,
    )}

    & > li > a {
        border-top: 6px solid transparent;

        &.--active {
            border-top: 6px solid ${colors.green};
        }
    }

    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;

    li {
        height: 100%;
        overflow: hidden;
    }

    & > li {
        width: 100%;

        &:hover ul,
            ul:focus-within, // (focus-within not supported by IE and older edges)
            ul.focussed {
            z-index: 1;
            ${notSrOnly}
            position: absolute;
            display: block;
            background-color: ${colors.green};
            padding: ${spacing.md} 0;
        }

        & > a {
            padding-bottom: 0;
        }
    }

    ul {
        ${srOnly}
    }

    a {
        text-align: center;
        width: 100%;
        padding: ${spacing.lg} 0 ${spacing.lg} 0;
        display: inline-block;
        text-decoration: none;
        color: ${colors.foreground};
        font-weight: 600;
        font-family: ${fonts.header};
        letter-spacing: 1px;

        &:focus-visible {
            text-decoration: underline;
        }

        ${fromSize.md(css`
            font-size: ${fontSizes.md};
            padding-top: ${spacing.xl};
        `)}

        ${fromSize.lg(css`
            font-size: ${fontSizes.xl};
            padding-top: ${spacing.xxl};
        `)}
    }

    ul a {
        font-weight: normal;
        font-size: ${fontSizes.md};
        padding: ${spacing.sm} ${spacing.md};
        text-align: left;
        color: ${colors.background};
        &:focus-visible {
            text-decoration: none;
            outline: none;
        }

        &:hover,
        &:focus {
            color: ${colors.green};
            background-color: ${colors.background};
            text-decoration: none;
        }

        &.--active {
            background-color: ${colors.background};
            color: ${colors.green};
        }
    }
`;

export const NavigationMobile = styled.select`
    width: 100%;

    ${fromSize.sm(
        css`
            display: none;
        `,
    )}
`;

export const NavContainer = styled.nav`
    width: 100%;

    ${fromSize.sm(
        css`
            width: auto;
            flex-grow: 1;
        `,
    )}
`;
