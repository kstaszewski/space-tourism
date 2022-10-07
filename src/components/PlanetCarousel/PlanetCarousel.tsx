import React from 'react';
import { Planets } from '../../pages/Destination/Destination';
import css from './PlanetCarousel.module.css';

type Props = {
    data: Planets;
    selectedIndex: number;
};

const PlanetCarousel = ({ data, selectedIndex }: Props) => {
    return (
        <>
            <div className={css.carouselWrapper}>
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