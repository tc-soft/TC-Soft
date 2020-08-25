import React from 'react';

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
                    <ul>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2020 TC-Soft</li>
                    </ul>

                    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                        <img alt="Licencja Creative Commons"
                            src="https://i.creativecommons.org/l/by/4.0/88x31.png" />

                    </a><br /><span property="dct:title">mini-Icons</span> by <a
                        href="www.tc-soft.pl" property="cc:attributionName"
                        rel="cc:attributionURL">TC-Soft</a> is licensed under a < a rel="license"
                            href="http://creativecommons.org/licenses/by/4.0/" > Creative Commons Uznanie autorstwa 4.0 Międzynarodowe License</a >.
      < br /> W oparciu o utwór dostępny pod adresem
        < a href="https://github.com/tc-soft/mini-Icons"
                        rel="dct:source" > https://github.com/tc-soft/mini-Icons</a>
                </div >
            </footer >
        </React.Fragment>
    );
}

export default Footer;