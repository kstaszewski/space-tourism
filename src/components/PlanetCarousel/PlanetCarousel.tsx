import React, { useRef, useEffect } from 'react';
import { Planets } from '../../pages/Destination/Destination';
import CarouselAnimateHandler from '../CarouselAnimateHandler/CarouselAnimateHandler';
import css from './PlanetCarousel.module.css';

type Props = {
    data: Planets;
    selectedIndex: number;
};

const PlanetCarousel = ({ data, selectedIndex }: Props) => {

    const reference = useRef<HTMLDivElement>(null);

    useEffect(() => {
        CarouselAnimateHandler({reference, selectedIndex})
    }, [selectedIndex]);

    return (
        <>
            <div ref={reference} className={`${css.carouselWrapper}`}>
                {data.map(planet => {
                    return (
                        <div key={planet.name} className={css.carouselElement}>
                            <img src={planet.photoUrl} alt={planet.name} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PlanetCarousel;