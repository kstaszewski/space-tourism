import React, { useRef, useEffect } from 'react';
import { CrewType } from '../../pages/Crew/Crew';
import CarouselAnimateHandler from '../CarouselAnimateHandler/CarouselAnimateHandler';
import css from './CrewCarousel.module.css';

type Props = {
    data: CrewType;
    selectedIndex: number;
};

const CrewCarousel = ({ data, selectedIndex }: Props) => {

    const reference = useRef<HTMLDivElement>(null);

    useEffect(() => {
        CarouselAnimateHandler({ reference, selectedIndex });
    }, [selectedIndex]);

    return (
        <>
            <div ref={reference} className={`${css.carouselWrapper}`}>
                {data.map(crewMember => {
                    return (
                        <div key={crewMember.name} className={css.carouselElement}>
                            <img src={crewMember.photoUrl} alt={crewMember.name} />
                        </div>
                    );
                })}
            </div>
            <div className={css.underline} />
        </>
    );
};

export default CrewCarousel;