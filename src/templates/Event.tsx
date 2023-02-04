import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '../components/Layout/Main/MainLayout';
import YoastSeo from '../components/Seo/YoastSeo';
import UpcomingEvent, {
    UpcomingEventType,
} from '../components/UpcomingEvents/UpcomingEvent';

type Props = {
    data: {
        event: UpcomingEventType;
    };
    path: string;
    location: Location;
};
const Event: React.FunctionComponent<Props> = ({
    path,
    data: { event },
    location,
}) => {
    return (
        <MainLayout location={location} withHeaderBorder={false}>
            <YoastSeo lang="nl" path={path} html="" />
            <Helmet>
                <title>{event.name} - Anderwijs</title>
                <meta
                    name="description"
                    content={`Anderwijs - ${event.name}: ${event.description}`}
                />
                <meta
                    name="keywords"
                    content={`Anderwijs, Kamp, Bijles, ${event.name}, ${event.locationName}, ${event.locationPlace}`}
                />
                <script type="application/ld+json">
                    {event.structured_data}
                </script>
            </Helmet>
            <UpcomingEvent key={event.id} event={event} />
        </MainLayout>
    );
};

export default Event;

export const query = graphql`
    query ($id: String!) {
        event: aasUpcomingEvents(id: { eq: $id }) {
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
`;
