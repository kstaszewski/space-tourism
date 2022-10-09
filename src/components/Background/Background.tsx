import React from 'react';
import css from './Background.module.css';

type Props = {
    url: string;
};

const Background = ({ url }: Props) => {
    return (
        <>
                <img className={css.background} src={url} alt="background" />
        </>
    );
};

export default Background;