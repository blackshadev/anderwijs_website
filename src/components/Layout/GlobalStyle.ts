import { createGlobalStyle } from 'styled-components';
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

    h1, h2, h3, h4, h5, h6 {
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

    h1, h2, h3 {
        margin-top: ${spacing.lg};
        font-weight: 600;
    }

    h1 {
        font-size: ${fontSizes.xl};
        border-bottom: 1px solid ${colors.lightGrey};
        padding-bottom: 2rem;
    }

    h2, h3 {
        font-size: ${fontSizes.lg};
    }

    
    h4, h5, h5 {
        font-size: ${fontSizes.md};
        font-weight: normal;
        letter-spacing: normal;
    }

    p {
        margin-bottom: ${spacing.md};
    }
`;
