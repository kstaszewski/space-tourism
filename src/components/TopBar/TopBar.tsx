import React, { useState } from 'react';
import css from './TopBar.module.css';
import { Outlet, Link } from 'react-router-dom';
import { Logo } from '../../assets/shared/logo';
import { IconClose } from '../../assets/shared/icon-close';
import { IconHamburger } from '../../assets/shared/icon-hamburger';

function TopBar() {
    const [isOpened, setIsOpened] = useState(false);
    const handleMenuClick = () => setIsOpened(false);
    return (
        <>
            <div className={css.container}>
                <div className={css.logo}>
                    <Logo />
                </div>
                <button className={css.iconHamburger} onClick={() => setIsOpened(!isOpened)}>
                    <IconHamburger style={{ "display": (isOpened ? 'none' : 'block') }} />
                    <IconClose style={{ "display": (isOpened ? 'block' : 'none') }} />
                </button>
                <nav className={`${isOpened ? css.visible : ''}`}>
                    <ul>
                        <li><Link to={`/`} onClick={handleMenuClick}>HOME</Link></li>
                        <li><Link to={`/destination`} onClick={handleMenuClick}>DESTINATION</Link></li>
                        <li><Link to={`/crew`} onClick={handleMenuClick}>CREW</Link></li>
                        <li><Link to={`/technology`} onClick={handleMenuClick}>TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default TopBar;