import React, { useState } from 'react';
import css from './Crew.module.css';
import Background from '../../components/Background/Background';
import TextEntry from '../../components/TextEntry/TextEntry';
import CrewCarousel from '../../components/CrewCarousel/CrewCarousel';
import CrewInfoCarousel from '../../components/CrewInfoCarousel/CrewInfoCarousel';

type CrewMember = {
  workTitle: string,
  name: string,
  description: string,
  photoUrl: any,
};

export type CrewType = CrewMember[];

function Crew() {

  const [chosenCrewMemberIndex, setChosenCrewMemberIndex] = useState(0);

  const crew: CrewType = [
    {
      workTitle: "commander",
      name: "Douglas Hurley",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      photoUrl: require('../../assets/crew/image-douglas-hurley.png'),
    },
    {
      workTitle: "Mission Specialist ",
      name: "MARK SHUTTLEWORTH",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      photoUrl: require('../../assets/crew/image-mark-shuttleworth.png'),
    },
    {
      workTitle: "PILOT",
      name: "Victor Glover",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      photoUrl: require('../../assets/crew/image-victor-glover.png'),
    },
    {
      workTitle: "Flight Engineer",
      name: "Anousheh Ansari",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      photoUrl: require('../../assets/crew/image-anousheh-ansari.png'),
    },
  ];



  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <TextEntry text={'MEET YOUR CREW'} />
          <CrewCarousel data={crew} selectedIndex={chosenCrewMemberIndex} />
          <div className={css.crewSwitcher}>
            {crew.map((crewMember, index) => {
              return (
                <button key={crewMember.name} onClick={() => setChosenCrewMemberIndex(index)} className={`${css.crewBtn} ${index === chosenCrewMemberIndex ? css.active : ''}`}></button>
              );
            })}
          </div>
          <CrewInfoCarousel data={crew} selectedIndex={chosenCrewMemberIndex} />
        </div>
      </div>
      <Background url={require('../../assets/crew/background-crew-mobile.jpg')} />
    </>
  );
}

export default Crew;