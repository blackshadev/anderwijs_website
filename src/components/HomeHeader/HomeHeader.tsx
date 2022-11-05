import React, { useMemo, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import { HomeHeaderContainer } from './components';
import allImages from './images';

const INTERVAL = 5_000;

export default function HomeHeader() {
    const images = useMemo(
        () =>
            allImages
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value),
        [allImages],
    );
    const [imageIndex, setImageIndex] = useState<number>(0);

    useInterval(() => {
        setImageIndex((imageIndex + 1) % images.length);
    }, INTERVAL);

    return (
        <HomeHeaderContainer>
            <img
                src={images[imageIndex]}
                alt="Een blik bij ons op kamp"
                aria-hidden={true}
            />
        </HomeHeaderContainer>
    );
}
