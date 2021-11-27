import styled from 'styled-components';
import colors from '../../styling/colors';
import fonts from '../../styling/fonts';
import fontSizes from '../../styling/fontSizes';
import spacing from '../../styling/spacing';

export const Content = styled.div`
    .hr {
        background: ${colors.green};
        height: 8px;
        overflow: hidden;
        margin: 36px 0 31px 0;
        line-height: 0;
        font-size: 0;
    }

    hr {
        margin: 18px 0;
        border: 0;
        border-top: 1px solid #eee;
    }

    strong {
        font-weight: 600;
    }

    .row {
        display: flex;
    }

    .span3 {
        flex: 1;
        width: 270px;
        margin-left: 30px;
    }

    iframe {
        max-width: 100%;
    }

    p {
        text-align: justify;
    }

    .table td {
        padding: ${spacing.sm};
        line-height: 18px;
        text-align: left;
        vertical-align: top;
        border-top: 1px solid ${colors.lightGrey};
    }

    .gatsby-image-wrapper.full-width {
        width: 100%;
    }

    .wp-block-image {
        .aligncenter {
            text-align: center;
        }
        .alignright {
            float: right;
            margin: ${spacing.md} 0 ${spacing.md} ${spacing.md};
        }
    }

    .btn-reg.btn-reg-inv {
        border: 1px solid ${colors.darkGreen};
        color: ${colors.darkGreen};
        display: block;
        padding: ${spacing.md};
        text-align: center;
        font-size: ${fontSizes.xl};
        cursor: pointer;

        &:hover {
            text-decoration: none;
            color: ${colors.background};
            background: ${colors.green};
        }
    }

    em {
        font-style: italic;
    }

    blockquote {
        border-left: 5px solid ${colors.lightGrey};
        padding: ${spacing.sm} ${spacing.md};
        margin-bottom: ${spacing.lg};

        p {
            font-size: ${fontSizes.lg};
            margin: 0;
        }

        cite {
            font-style: italic;
            padding-left: ${spacing.sm};
        }
    }

    ul {
        list-style: initial;
        margin-left: ${spacing.lg};
        margin-bottom: ${spacing.md};
    }

    .wp-block-columns {
        display: flex;
        flex-wrap: nowrap;

        .wp-block-column {
            flex-basis: 0;
            flex-grow: 1;

            &:not(:first-child) {
                margin-left: ${spacing.md};
            }
        }
    }

    p.field {
        input {
            height: 24px;
        }

        input,
        textarea {
            font-family: ${fonts.normal};
            padding: ${spacing.xs};
            margin: 0;
            border: 1px solid ${colors.lightGrey};
        }
    }

    input[type='submit'] {
        background: ${colors.background};
        color: ${colors.darkGreen};
        border: 1px solid ${colors.darkGreen};
        padding: ${spacing.sm} ${spacing.md};
        cursor: pointer;

        &:hover {
            background: ${colors.green};
            color: ${colors.background};
        }
    }

    label {
        margin-bottom: ${spacing.sm};
    }

    input:focus-visible {
        outline: 1px solid ${colors.darkGreen};
    }

    input[type='text'] {
        border: 1px solid ${colors.lightGrey};
        padding: ${spacing.md};
    }

    /** Mollie form overwrite */
    input[name='dmm_currency'] + span {
        overflow: initial !important;

        input {
            float: none !important;
        }
    }
`;
