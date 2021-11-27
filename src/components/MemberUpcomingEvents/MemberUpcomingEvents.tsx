import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
    Container,
    Event as EventItem,
    EventDefinitions,
    EventDetails,
} from './components';

const QUERY = graphql`
    query UpcomingMemberEvents {
        allAasUpcomingEventsFull {
            edges {
                node {
                    code
                    name: naam
                    preparation_day: datum_voordag
                    date_start: datum_start
                    time_start: tijd_start
                    date_end: datum_eind
                    time_end: tijd_eind
                    location: kamphuis_plaats
                    location_address: kamphuis_adres
                    description: beschrijving
                }
            }
        }
    }
`;

type UpcomingEvent = {
    code: string;
    name: string;
    preparation_day: string;
    date_start: string;
    time_start: string;
    date_end: string;
    time_end: string;
    location: string;
    location_address: string;
    description: string;
};

type UpcomingEventQueryResult = {
    allAasUpcomingEventsFull: {
        edges: {
            node: UpcomingEvent;
        }[];
    };
};

const MemberUpcomingEvents: React.FunctionComponent = () => {
    const eventsResult = useStaticQuery<UpcomingEventQueryResult>(QUERY);

    return (
        <Container>
            {eventsResult.allAasUpcomingEventsFull.edges.map((edge) => (
                <EventItem key={edge.node.code}>
                    <h3>{edge.node.name}</h3>
                    <EventDetails>
                        <EventDefinitions>
                            <dt>Voordag</dt>
                            <dd>
                                {edge.node.preparation_day.replace(
                                    /<[^>]+>/g,
                                    '',
                                )}
                            </dd>

                            <dt>Start</dt>
                            <dd>
                                {edge.node.date_start} {edge.node.time_start}
                            </dd>

                            <dt>Eind</dt>
                            <dd>
                                {edge.node.date_end} {edge.node.time_end}
                            </dd>
                        </EventDefinitions>

                        <EventDefinitions>
                            <dt>Locatie</dt>
                            <dd>
                                {edge.node.location_address} te{' '}
                                {edge.node.location}
                            </dd>
                        </EventDefinitions>
                    </EventDetails>
                </EventItem>
            ))}
        </Container>
    );
};

export default MemberUpcomingEvents;
