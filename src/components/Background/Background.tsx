import React from 'react';
import css from './Background.module.css';

type Props = {
    url: string;
};

const Background = ({ url }: Props) => {
    console.log('first')
    return (
        <>
            {/* <div className={css.background} style={{ height: (window.document.body.clientHeight < window.innerHeight) ? window.innerHeight : window.document.body.clientHeight }}> */}
                <img className={css.background} src={url} alt="background" />
            {/* </div> */}
        </>
    );
};

export default Background;