import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import UpcomingEvent, { UpcomingEventType } from './UpcomingEvent';

const UPCOMING_EVENTS = graphql`
    query AllUpcomingEvents {
        allAasUpcomingEvents {
            edges {
                node {
                    id: id__normalized
                    code
                    name: naam
                    startDate: datum_start
                    startTime: tijd_start
                    endDate: datum_eind
                    endTime: tijd_eind
                    locationName: kamphuis_naam
                    locationPlace: kamphuis_plaats
                    locationAddress: kamphuis_adres
                    locationWebsite: kamphuis_website
                    locationZipcode: kamphuis_postcode
                    priceHtml: prijs
                    description: beschrijving
                    days: aantal_dagen
                    prijzen {
                        type
                        prijzen {
                            omschrijving
                            prijs
                            korting
                        }
                    }
                    structured_data
                }
            }
        }
    }
`;

type UpcomingEventsQueryResult = {
    allAasUpcomingEvents: {
        edges: {
            node: UpcomingEventType;
        }[];
    };
};

export default function UpcomingEvents(): React.ReactElement {
    const eventsResult =
        useStaticQuery<UpcomingEventsQueryResult>(UPCOMING_EVENTS);
    const events = eventsResult.allAasUpcomingEvents.edges.map(
        (edge) => edge.node,
    );

    return (
        <>
            {events.map((event) => (
                <UpcomingEvent key={event.id} event={event} />
            ))}
        </>
    );
}
