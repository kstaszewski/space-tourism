import React from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import TextEntry from '../../components/TextEntry/TextEntry';

function Home() {
  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <TextEntry text={'SO,YOU WANT TO TRAVEL TO'} />
          <h1>SPACE</h1>
          <p className={css.description}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className={css.ovalExploreWrapper}>
          <Link className={css.ovalExplore} to={'./destination'}>
            <p>EXPLORE</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;