import React from 'react';
import { graphql } from 'gatsby';
import MainLayout from '../components/Layout/Main/MainLayout';
import YoastSeo from '../components/Seo';

type PageData = {
    title: string;
    content: string;
    seo: {
        fullHead: string;
    };
};

type Props = {
    path: string;
    data: {
        page: PageData;
    };
    location: Location;
};

const Home: React.FunctionComponent<Props> = ({
    data: { page },
    path,
    location,
}) => {
    return (
        <MainLayout location={location} withHeaderBorder={false}>
            <YoastSeo html={page.seo.fullHead} lang="nl" path={path} />
            {/* <HomeHeader /> */}
            <h2>Helaas! Anderwijs is niet meer...</h2>

            <p>
                Op 30 juni 2024 hebben we namelijk tijdens een algemene
                ledenvergadering het verdrietige besluit genomen om de
                vereniging Anderwijs te ontbinden.
            </p>

            <p>
                Sinds de oprichting in 1985 hebben we, als invulling van onze
                statutaire missie om het onderwijs kritisch te beschouwen,
                bijleskampen georganiseerd om jonge mensen te helpen met hun
                ontwikkeling, op school en daarbuiten. Onze enthousiaste
                vrijwilligers hebben daarbij altijd geprobeerd kampen neer te
                zetten met veel persoonlijke aandacht en een gezellige sfeer, om
                leren weer leuk te maken. Altijd non-profit en met hoge
                kortingen voor gezinnen die minder te besteden hebben, omdat wij
                geloven dat goed onderwijs (inclusief bijles voor als het anders
                allemaal even niet lukt) voor iedereen toegankelijk moet zijn.
            </p>

            <p>
                Helaas is sinds de coronapandemie de aanwas van nieuwe leiding
                en deelnemers sterk gedaald. Mogelijk heeft de opkomst van
                commerciële bijlesinstituten daarbij ook niet geholpen. Het
                draaien van de vereniging kwam op steeds minder schouders te
                liggen, we hadden kleinere kampen en ook financieel ging het
                snel achteruit. We hebben hard gestreden, helaas hebben we het
                tij niet kunnen keren.
            </p>

            <p>
                Onze dank gaat uit naar alle mensen die zich in de afgelopen
                jaren hebben ingezet voor Anderwijs, zij het praktisch,
                financieel of door naamsbekendheid. Zonder jullie hadden we
                nooit zoveel moois kunnen doen. Onze financiële nalatenschap
                gaat naar de stichting{' '}
                <a href="https://www.schoolscool.nl">
                    School&apos;s cool Nederland
                </a>
                , die net als wij kansengelijkheid in het onderwijs nastreeft.
                Voel je vrij om, als je iets kunt missen, hen ter nagedachtenis
                aan ons van een financieel steuntje in de rug te voorzien.
            </p>

            <p>
                Ben je leiding of (ouder/verzorger van een) deelnemer die mee op
                kamp is geweest? Dan kun je nog op ons{' '}
                <a href="https://aas2.anderwijs.nl">administratieysteem</a>{' '}
                inloggen om je gegevens in te zien. Ook de afgeschermde{' '}
                <a href="https://cloud.anderwijs.nl">cloud</a> met foto&apos;s
                is nog online. Voor al het overige je contact opnemen met het
                bestuur op{' '}
                <a href="mailto:bestuur@anderwijs.nl">bestuur@anderwijs.nl</a>.
            </p>

            <p>
                Deze website en de digitale systemen blijven bestaan tot eind
                2024.
            </p>

            <p>
                <i>Anderwijs werd mede mogelijk gemaakt door jou &hearts;</i>
            </p>
            {/* <WysiwygContent content={page.content} location={location} /> */}
        </MainLayout>
    );
};

export default Home;

export const query = graphql`
    query ($id: String!) {
        page: wpPage(id: { eq: $id }) {
            title
            content
            seo {
                fullHead
            }
        }
    }
`;
