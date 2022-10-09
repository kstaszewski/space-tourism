import React, { useRef, useEffect } from 'react';
import css from './PlanetInfo.module.css';
import { Planets } from '../../pages/Destination/Destination';
import CarouselAnimateHandler from '../CarouselAnimateHandler/CarouselAnimateHandler';

type Props = {
  data: Planets;
  selectedIndex: number;
};

const PlanetInfo = ({ data, selectedIndex}: Props) => {

  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CarouselAnimateHandler({ reference, selectedIndex });
  }, [selectedIndex]);

  return (
    <>
      <div ref={reference} className={`${css.carouselWrapper
        }`}>
        {data.map(planet => {
          return (
            <div key={planet.name} className={css.carouselElement}>
              <h2>{planet.name}</h2>
              <p className={css.description}>{planet.description}</p>
              <div className={css.divider}></div>
              <div className={css.paramWrapper}>
                <p className={css.paramName}>AVG. DISTANCE</p>
                <p className={css.paramValue}>{planet.avgDistance}</p>
              </div>
              <div className={css.paramWrapper}>
                <p className={css.paramName}>EST. TRAVEL TIME</p>
                <p className={css.paramValue}>{planet.estTravelTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlanetInfo;