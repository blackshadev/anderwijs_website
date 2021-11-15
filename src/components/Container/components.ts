import styled from 'styled-components';
import containerSizes from '../../styling/containerSizes';
import screenSizes from '../../styling/screenSizes';

export const StyledContainer = styled.div`
    width: ${containerSizes.xs};
    margin: 0 auto;

    @media (min-width: ${screenSizes.sm}) {
        width: ${containerSizes.sm};
    }

    @media (min-width: ${screenSizes.md}) {
        width: ${containerSizes.md};
    }

    @media (min-width: ${screenSizes.lg}) {
        width: ${containerSizes.lg};
    }
`;
