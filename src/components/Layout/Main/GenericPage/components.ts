import styled from 'styled-components';
import spacing from '../../../../styling/spacing';

export const SplitPanel = styled.div`
    display: flex;

    & > div,
    & > section {
        flex: 1;
        margin-right: ${spacing.xl};

        &:last-child {
            flex: 0;
            min-width: 370px;
            margin: 0;
        }
    }
`;

export const ContentContainer = styled.div``;
