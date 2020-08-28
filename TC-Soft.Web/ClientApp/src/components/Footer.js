import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="social">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/tadeusz-ciszewski-475095191" target="_blank"><i
                            className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/tc-soft" target="_blank"><i className="fa fa-github"></i></a></li>
                        <li><a href="mailto:office@tc-soft.pl?subject=Kontakt%20WEB&body=Napisz%20coś"><i className="fa fa-envelope"></i></a>
                        </li>
                        <li><a href="https://www.facebook.com/TC-Soft-100264435115387" target="_blank"><i
                            className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCVWl6FMlld06pQAqAmM-FHA?view_as=subscriber" target="_blank"><i
                            className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>

                <div className="legal">

                    <Link to="/contact">
                        <img src="./Microsoft_365_logo.png" alt="Microsoft365"></img>
                    </Link>

                    <ul>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2020.09 TC-Soft</li>
                    </ul>
                </div >
            </footer >
        </React.Fragment >
    );
}

export default Footer;