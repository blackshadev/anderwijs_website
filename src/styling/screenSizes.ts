import { css } from 'styled-components';

export const breakpoints = {
    sm: '768px',
    md: '992px',
    lg: '1200px',
};
export default breakpoints;

type BreakpointKeys = keyof typeof breakpoints;

type Media = {
    [key in BreakpointKeys]: (cssString: ReturnType<typeof css>) => string;
};

export const fromSize: Media = Object.entries(breakpoints).reduce(
    (acc, [label, size]) => {
        return {
            ...acc,
            [label]: (content: string) =>
                css`
                    @media (min-width: ${size}) {
                        ${content}
                    }
                `,
        };
    },
    {},
) as Media;
