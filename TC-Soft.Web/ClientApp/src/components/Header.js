import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
       <React.Fragment>
            <header className="header">
                <svg className="header__logo" xmlns="http://www.w3.org/2000/svg" height="22px"
                    version="1.1"
                    viewBox="0 0 90 20">
                    <g>
                        <polygon className="fill12" points="6,9 16,0 29,4 27,17 13,20 " />
                        <polygon className="fill10" points="8,9 16,1 27,5 26,16 14,18 " />
                        <polygon className="fill00" points="26,9 37,9 37,11 26,11 " />
                        <path className="fill00"
                            d="M38 13l6 0c2,-2 -6,-1 -6,-5 0,-4 2,-5 4,-5l6 0 1 4 -6 0c-2,3 6,1 6,6 0,3 -2,4 -3,4l-8 0 0 -4z" />
                        <path className="fill12" d="M14 10c0,-4 4,-7 5,-7l6 0 0 4 -5 0c-3,0 -3,5 0,6l5 0 0 4 -6 0c-2,0 -5,-3 -5,-7z" />
                        <path className="fill00" d="M58 3c3,0 7,2 7,7 0,5 -4,7 -7,7 -4,0 -7,-2 -7,-7 0,-5 3,-7 7,-7z" />
                        <polygon className="fill00" points="79,3 90,3 90,7 86,7 87,17 82,17 82,7 79,7 " />
                        <path className="fill00" d="M72 3l5 0 0 4 -1 0 0 5 -6 0 1 5 -5 0 0 -9c0,-2 4,-5 6,-5z" />
                        <polygon className="fill10" points="37,7 90,7 90,8 37,8 " />
                        <path className="fill10" d="M58 7c1,0 2,1 2,3 0,2 -1,3 -2,3 -2,0 -3,-1 -3,-3 0,-2 1,-3 3,-3z" />
                        <polygon className="fill10" points="13,7 25,7 25,8 13,8 " />
                        <polygon className="fill12" points="1,3 13,3 13,7 9,7 9,17 5,17 5,7 1,7 " />
                        <polygon className="fill10" points="0,7 9,7 7,8 0,8 " />
                    </g>
                </svg>

                <nav className="header__menu">
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