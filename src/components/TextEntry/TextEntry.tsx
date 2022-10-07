import React from 'react';
import css from './TextEntry.module.css';

type Props = {
    text: string;
};

const TextEntry = ({ text }: Props) => {
    return (
        <p className={css.entryP}>{text}</p>
    );
};

export default TextEntry;