import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as MenuOpen } from '../images/menuOpen.svg';
import { ReactComponent as MenuClose } from '../images/menuClose.svg';
import './Header.scss';

function Header() {

    const [isOpen, toggleMenuState] = useState(false);
    const toggleMenu = event => {
        event.preventDefault();
        toggleMenuState(!isOpen);
    };

    return (
        <React.Fragment>
            <header className="header">

                <Logo className="header__logo"/>

                <nav className="header__menuDesktop">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/implementations">WDROŻENIA</Link></li>
                        <li><Link to="/instructions">INSTRUKCJE</Link></li>
                        <li><Link to="/contact">KONTAKT</Link></li>
                    </ul>
                </nav>

                <MenuOpen className={isOpen ? "header__hamburger header__hamburger--hidden" : "header__hamburger"} onClick={toggleMenu}/>

                <nav className={isOpen ? "header__menuMobile header__menuMobile--visible" : "header__menuMobile"}>
                    <MenuClose onClick={toggleMenu}/>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/implementations">WDROŻENIA</Link></li>
                        <li><Link to="/instructions">INSTRUKCJE</Link></li>
                        <li><Link to="/contact">KONTAKT</Link></li>
                    </ul>
                </nav>

            </header>
        </React.Fragment>
    );
}

export default Header;