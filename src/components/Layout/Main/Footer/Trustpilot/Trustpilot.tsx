import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

declare global {
    interface Window {
        Trustpilot: {
            loadFromElement(element: HTMLElement, bool: boolean);
        };
    }
}

const TrustPilot: React.FunctionComponent = () => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Trustpilot) {
            window.Trustpilot.loadFromElement(ref.current, true);
            setLoaded(true);
        }
    }, [loaded]);

    return (
        <>
            <Helmet>
                <script
                    type="text/javascript"
                    src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                    async={true}
                />
            </Helmet>
            <div
                ref={ref}
                className="trustpilot-widget"
                data-locale="nl-NL"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="617beb2f3e0299505641c926"
                data-style-height="52px"
                data-style-width="100%"
                data-theme="light"
                data-stars="1,2,3,4,5"
                data-no-reviews="hide"
                data-scroll-to-list="true"
                data-allow-robots="true"
            >
                <a
                    href="https://nl.trustpilot.com/review/anderwijs.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Trustpilot
                </a>
            </div>
        </>
    );
};

export default TrustPilot;
