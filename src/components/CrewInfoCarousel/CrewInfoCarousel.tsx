import React, { useRef, useEffect } from 'react';
import css from './CrewInfoCarousel.module.css';
import { CrewType } from '../../pages/Crew/Crew';
import CarouselAnimateHandler from '../CarouselAnimateHandler/CarouselAnimateHandler';

type Props = {
  data: CrewType;
  selectedIndex: number;
};

const CrewInfoCarousel = ({ data, selectedIndex }: Props) => {

  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CarouselAnimateHandler({ reference, selectedIndex });
  }, [selectedIndex]);

  return (
    <>
      <div ref={reference} className={`${css.carouselWrapper
        }`}>
        {data.map(crewMember => {
          return (
            <div key={crewMember.name} className={css.carouselElement}>
              <h2>{crewMember.workTitle}</h2>
              <h1>{crewMember.name}</h1>
              <p>{crewMember.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CrewInfoCarousel;