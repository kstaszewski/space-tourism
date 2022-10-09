import React from 'react';

type Props = {
    reference: React.RefObject<HTMLDivElement>,
    selectedIndex: number,
};

const CarouselAnimateHandler = ({ reference, selectedIndex = 0 }: Props) => {
    if (reference.current) reference.current.style.transform = `translateX(-${selectedIndex * 100}vw)`;
};

export default CarouselAnimateHandler;