import styled from 'styled-components';
import spacing from '../../../styling/spacing';

export const UpcomingEventsList = styled.ul`
    & + a {
        display: inline-block;
        margin-bottom: ${spacing.md};
    }
`;

export const UpcomingEventsExternalLink = styled.p``;
