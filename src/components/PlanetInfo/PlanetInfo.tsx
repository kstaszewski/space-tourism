import React from 'react';
import css from './PlanetInfo.module.css';
import { Planets } from '../../pages/Destination/Destination';

type Props = {
  data: Planets;
  selectedIndex: number;
};

const PlanetInfo = ({ data, selectedIndex }: Props) => {
  return (
    <>
      <div className={css.carouselWrapper}>
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