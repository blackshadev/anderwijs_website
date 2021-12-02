import styled from 'styled-components';
import colors from '../../styling/colors';
import spacing from '../../styling/spacing';

export const ErrorList = styled.ul`
    color: ${colors.red};
`;

export const SubmitButton = styled.input`
    background: ${colors.background};
    color: ${colors.darkGreen};
    border: 1px solid ${colors.darkGreen};
    padding: ${spacing.sm} ${spacing.md};
    cursor: pointer;
    margin-bottom: ${spacing.md};

    &:hover:not(:disabled) {
        background: ${colors.green};
        color: ${colors.background};
    }

    &:disabled {
        border-color: ${colors.lightGrey};
        color: ${colors.lightGrey};
        cursor: not-allowed;
    }
`;
