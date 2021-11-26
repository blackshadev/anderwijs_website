import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import reset from '!!raw-loader!./stylesheets/reset.css';
import fonts from '../../styling/fonts';
import fontSizes from '../../styling/fontSizes';
import spacing from '../../styling/spacing';
import colors from '../../styling/colors';

export default createGlobalStyle`
    ${reset}

    body {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: ${fonts.normal};
        line-height: 120%;
    }

    h1, h2, h3 {
        font-family: ${fonts.header};
        margin-bottom: ${spacing.md};
        letter-spacing: 1px;

        a {
            text-decoration: none;
            color: ${colors.foreground};

            &:hover {
                color: ${colors.blue};
            }
        }
    }

    h4, h5, h6 {
        margin-top: ${spacing.md};
        margin-bottom: ${spacing.sm};
    }

    h1, h2 {
        margin-top: ${spacing.lg};
    }

    h1 {
        font-size: ${fontSizes.xxl};
        border-bottom: 1px solid ${colors.lightGrey};
        padding-bottom: 2rem;
    }

    h2, h3 {
        font-size: ${fontSizes.xl};
    }

    h2 {
        font-weight: 600;
    }

    h3 {
        margin-top: ${spacing.lg};
        margin-bottom: ${spacing.sm};
    }

    
    h4, h5, h5 {
        font-size: ${fontSizes.md};
        font-weight: normal;
        letter-spacing: normal;
    }

    p {
        margin-bottom: ${spacing.md};
    }

    a {
        color: ${colors.green};
        text-decoration: none;
        &:hover {
            color: ${colors.darkGreen};
            text-decoration: underline;
        }
    }
`;
