import React from 'react';
import css from './Background.module.css';

type Props = {
    url: string;
};

const Background = ({ url }: Props) => {
    return (
        <>
            <div className={css.background}>
                <img src={url} alt="background" />
            </div>
        </>
    );
};

export default Background;