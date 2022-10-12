import { Link } from 'gatsby';
import React from 'react';

import {
    EventContainer,
    EventData,
    EventImage,
    EventTitle,
} from './components';
import images from './images';

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
};

export default function UpcomingEvent({
    event,
}: {
    event: UpcomingEventType;
}): React.ReactElement {
    const image = images[event.id % images.length];

    return (
        <EventContainer>
            <EventTitle id={event.code}>{event.name}</EventTitle>
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

                    <tr
                        dangerouslySetInnerHTML={{ __html: event.priceHtml }}
                    ></tr>
                    <tr>
                        <td colSpan={2}>
                            <Link to="/onze-bijleskampen/kosten">
                                Meer informatie over de kortingsregeling.
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
