import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { UpcomingEventsContainer, UpcomingEventsList } from './components';

const UPCOMING_EVENTS = graphql`
    query UpcomingEvents {
        allAasUpcomingEvents(limit: 3) {
            edges {
                node {
                    code
                    name: naam
                    date_start: datum_start
                    date_end: datum_eind
                    location: kamphuis_plaats
                }
            }
        }
    }
`;

type UpcomingEvent = {
    code: string;
    name: string;
    date_start: string;
    date_end: string;
    location: string;
};

type UpcomingEventQueryResult = {
    allAasUpcomingEvents: {
        edges: {
            node: UpcomingEvent;
        }[];
    };
};

const UpcomingEvents: React.FunctionComponent = () => {
    const eventsResult =
        useStaticQuery<UpcomingEventQueryResult>(UPCOMING_EVENTS);
    const events = eventsResult.allAasUpcomingEvents.edges.map(
        (edge) => edge.node,
    );

    return (
        <>
            <UpcomingEventsList>
                {events.map((event: UpcomingEvent) => {
                    return (
                        <li key={event.code}>
                            <h3>{event.name}</h3>
                            <p>
                                {event.date_start} t/m {event.date_end} te{' '}
                                {event.location}
                            </p>
                        </li>
                    );
                })}
            </UpcomingEventsList>
            <Link to="/onze-bijleskampen/kampagenda/">
                Volledige kampagenda
            </Link>
            <p>
                Onze kampen zijn ook te vinden op{' '}
                <a
                    href="https://zomerkampen.net"
                    target="_blank"
                    rel="noreferrer"
                >
                    Zomerkampen.net
                </a>
            </p>
        </>
    );
};

export default UpcomingEvents;
