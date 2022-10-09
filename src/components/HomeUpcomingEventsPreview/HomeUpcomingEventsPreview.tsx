import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import images from '../UpcomingEvents/images';
import { PreviewImage, UpcomingEventLink } from './components';

type UpcomingEventsQueryResult = {
    allAasUpcomingEvents: {
        edges: {
            node: {
                id: number;
                code: string;
                name: string;
                startDate: string;
                endDate: string;
            };
        }[];
    };
};
type Props = {
    eventIndex: number;
};

export default function HomeUpcomingEventsPreview({ eventIndex }: Props) {
    if (Number.isNaN(eventIndex)) {
        eventIndex = 0;
    }
    const eventsResult =
        useStaticQuery<UpcomingEventsQueryResult>(UPCOMING_EVENTS);
    const events = eventsResult.allAasUpcomingEvents.edges.map(
        (edge) => edge.node,
    );

    const event = events[eventIndex];

    return (
        <UpcomingEventLink
            href={`/onze-bijleskampen/kampagenda/#${event.code}`}
        >
            <h3>{event.name}</h3>
            <h5>
                {event.startDate} t/m {event.endDate}
            </h5>
            <PreviewImage
                src={images[eventIndex]}
                alt={`Een sfeer van een kamp zoals ${event.name}`}
            />
        </UpcomingEventLink>
    );
}

const UPCOMING_EVENTS = graphql`
    query AllUpcomingEventsPreview {
        allAasUpcomingEvents {
            edges {
                node {
                    id: id__normalized
                    code
                    name: naam
                    startDate: datum_start
                    endDate: datum_eind
                }
            }
        }
    }
`;
