import React, { useState } from 'react';
import css from './Destination.module.css';
import TextEntry from '../../components/TextEntry/TextEntry';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import Background from '../../components/Background/Background';
import PlanetCarousel from '../../components/PlanetCarousel/PlanetCarousel';

type Planet = {
  name: string,
  photoUrl: any,
  description: string,
  avgDistance: string,
  estTravelTime: string;
};

export type Planets = Planet[];

function Destination() {
  const [chosenPlanetIndex, setChosenPlanetIndex] = useState(0);
  const planets: Planets = [
    {
      name: 'moon',
      photoUrl: require('../../assets/destination/image-moon.png'),
      description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      avgDistance: '384,400 km',
      estTravelTime: '3 days'
    },
    {
      name: 'mars',
      photoUrl: require('../../assets/destination/image-mars.png'),
      description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      avgDistance: '225 MIL. km',
      estTravelTime: '9 months'
    },
    {
      name: 'europa',
      photoUrl: require('../../assets/destination/image-europa.png'),
      description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      avgDistance: '628 MIL. km',
      estTravelTime: '3 years'
    },
    {
      name: 'titan',
      photoUrl: require('../../assets/destination/image-titan.png'),
      description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      avgDistance: '1.6 BIL. km',
      estTravelTime: '7 years'
    },
  ];

  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <TextEntry text={'PICK YOUR DESTINATION'} />
          <PlanetCarousel data={planets} selectedIndex={chosenPlanetIndex} />
          <div className={css.planetSwitcher}>
            {planets.map((planet, index) => {
              return (
                <button key={planet.name} onClick={() => setChosenPlanetIndex(index)} className={`${css.planetBtn} ${index === chosenPlanetIndex ? css.active : ''}`}> {planet.name} </button>
              );
            })}
          </div>
          <PlanetInfo data={planets} selectedIndex={chosenPlanetIndex} />
        </div>
      </div>
      <Background url={require('../../assets/destination/background-destination-mobile.jpg')} />
    </>
  );
}

export default Destination;