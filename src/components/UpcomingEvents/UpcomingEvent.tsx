import { Link } from 'gatsby';
import React from 'react';

import {
    EventContainer,
    EventData,
    EventImage,
    EventTitle,
    PriceList,
} from './components';
import images from './images';

type PriceTypes =
    | 'Standaard prijs'
    | 'Inkomen afhankelijke korting'
    | 'Vroegboek korting';

export type UpcomingEventType = {
    id: number;
    code: string;
    name: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    locationName: string;
    locationPlace: string;
    locationAddress: string;
    locationWebsite: string;
    locationZipcode: string;
    priceHtml: string;
    description: string;
    days: number;
    prijzen: {
        type: PriceTypes;
        prijzen: {
            korting: string;
            omschrijving: string;
            prijs: number;
        }[];
    }[];
    structured_data: string;
};

export default function UpcomingEvent({
    event,
}: {
    event: UpcomingEventType;
}): React.ReactElement {
    const image = images[event.id % images.length];

    return (
        <EventContainer>
            <EventTitle id={event.code}>
                <Link to={`/events/${event.code}`}>
                    {event.name}
                </Link>
            </EventTitle>
            <EventImage
                src={image}
                alt={`Een sfeerimpressie van een kamp zoals ${event.name}`}
            />
            <EventData>
                <tbody>
                    <tr>
                        <td>Datum</td>
                        <td>
                            {event.startDate} {event.startTime} t/m{' '}
                            {event.endDate} {event.endTime} ({event.days} dagen)
                        </td>
                    </tr>

                    <tr>
                        <td>Locatie</td>
                        <td>
                            {event.locationName} <br />
                            {event.locationAddress} <br />
                            {event.locationZipcode} {event.locationPlace} <br />
                            {event.locationWebsite ? (
                                <>
                                    <br />
                                    <a href={event.locationWebsite}>
                                        Website kamphuis
                                    </a>
                                </>
                            ) : null}
                        </td>
                    </tr>

                    <tr>
                        <td>Prijs</td>
                        <td>
                            {event.prijzen
                                .filter((p) => p)
                                .map(({ type, prijzen }) => (
                                    <PriceList key={type}>
                                        <p>{type}</p>
                                        <dl key={type}>
                                            {prijzen
                                                .filter((p) => p)
                                                .map(
                                                    ({
                                                        omschrijving,
                                                        prijs,
                                                    }) => (
                                                        <React.Fragment
                                                            key={omschrijving}
                                                        >
                                                            <dt>
                                                                {omschrijving}
                                                            </dt>
                                                            <dd>
                                                                &euro; {prijs}
                                                            </dd>
                                                        </React.Fragment>
                                                    ),
                                                )}
                                        </dl>
                                    </PriceList>
                                ))}
                            <Link to="/onze-bijleskampen/kosten">
                                Leer hier meer informatie over onze
                                kortingsregelingen.
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2}>{event.description}</td>
                    </tr>
                </tbody>
            </EventData>
        </EventContainer>
    );
}
