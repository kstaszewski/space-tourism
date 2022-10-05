import React, { useState } from 'react';
import css from './TopBar.module.css';
import { Outlet, Link } from 'react-router-dom';
import { Logo } from '../../assets/shared/logo';
import { IconClose } from '../../assets/shared/icon-close';
import { IconHamburger } from '../../assets/shared/icon-hamburger';

function TopBar() {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <div className={css.container}>
                <div className={css.logo}>
                    <Logo />
                </div>
                <button className={`${css.iconHamburger} ${isOpened ? '' : css.visible}`} onClick={() => setIsOpened(!isOpened)}>
                    <IconHamburger />
                </button>
                <nav className={`${isOpened ? css.visible : ''}`}>
                    <button className={css.iconClose}>
                        <IconClose />
                    </button>
                    <ul>
                        <li><Link to={`./`}>HOME</Link></li>
                        <li><Link to={`./destination`}>DESTINATION</Link></li>
                        <li><Link to={`./crew`}>CREW</Link></li>
                        <li><Link to={`./technology`}>TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default TopBar;