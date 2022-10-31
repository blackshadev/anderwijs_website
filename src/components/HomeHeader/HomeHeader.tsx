import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import { HomeHeaderContainer } from './components';
import images from './images';

const INTERVAL = 10_000;

export default function HomeHeader() {
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
