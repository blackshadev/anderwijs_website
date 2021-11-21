import React, { ReactChild, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import { HomeHeaderContainer } from './components';

type Props = {
    images: ReactChild[];
};

const INTERVAL = 10_000;

const HomeHeader: React.FunctionComponent<Props> = ({ images }) => {
    if (images.length === 0) {
        return;
    }

    const [imageIndex, setImageIndex] = useState<number>(0);

    useInterval(() => {
        setImageIndex((imageIndex + 1) % images.length);
    }, INTERVAL);

    return <HomeHeaderContainer>{images[imageIndex]}</HomeHeaderContainer>;
};

export default HomeHeader;
