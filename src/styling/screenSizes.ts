import { RuleSet, css } from 'styled-components';

export const breakpoints = {
    sm: '768px',
    md: '992px',
    lg: '1200px',
};
export default breakpoints;

type BreakpointKeys = keyof typeof breakpoints;

type Media = {
    [key in BreakpointKeys]: (
        cssString: TemplateStringsArray | RuleSet<object>,
    ) => ReturnType<typeof css>;
};

export const fromSize: Media = Object.entries(breakpoints).reduce(
    (acc, [label, size]) => {
        return {
            ...acc,
            [label]: (content: ReturnType<typeof css>) => {
                return css`
                    @media (min-width: ${size}) {
                        ${content}
                    }
                `;
            },
        };
    },
    {},
) as Media;
