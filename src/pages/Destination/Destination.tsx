import React from 'react';
import css from './Destination.module.css';
import TextEntry from '../../components/TextEntry/TextEntry';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';


function Destination() {
  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <TextEntry text={'PICK YOUR DESTINATION'} />
          <div className={css.planetCarousel}>

          </div>
          <div className={css.planetSwitcher}>

          </div>
          <PlanetInfo />
        </div>
      </div>
    </>
  );
}

export default Destination;