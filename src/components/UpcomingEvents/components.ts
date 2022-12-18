import styled from 'styled-components';
import spacing from '../../styling/spacing';

export const EventContainer = styled.div`
    margin-bottom: 2rem;
`;

export const EventTitle = styled.h3`
    margin-bottom: 1rem;
`;

export const EventImage = styled.img`
    max-width: 100%;
`;

export const EventData = styled.table`
    width: 100%;

    td {
        padding: 0.5rem;
        vertical-align: top;
        border-top: 1px solid rgb(238, 238, 238);
    }
`;

export const PriceList = styled.div`
    margin-bottom: ${spacing.md};

    p {
        margin: 0;
        margin-bottom: ${spacing.xs};
    }

    dl {
        margin-left: ${spacing.sm};
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    dt {
        grid-column-start: 1;
    }

    dd {
        grid-column-start: 2;
    }
`;
