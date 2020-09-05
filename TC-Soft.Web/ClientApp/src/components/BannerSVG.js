import React from 'react';

function BannerSVG() {
    return (
        <React.Fragment>
            <section className="bannerSVG">
                <svg className="bannerSVG__svg" xmlns="http://www.w3.org/2000/svg"
                    height="400px"
                    version="1.1" viewBox="0 0 162 100">
                    <g>
                        {/* Chmura */}
                        <g>
                            <ellipse className="fill11" cx="118" cy="18" rx="12" ry="11" />
                            <ellipse className="fill11" cx="143" cy="20" rx="10" ry="9" />
                            <ellipse className="fill11" cx="130" cy="13" rx="14" ry="13" />
                            <rect className="fill11" x="117" y="24.3" width="25.1908" height="4.68506" />
                            <polygon className="fill10 animArrowDown" points="127,17 122,24 116,17 120,17 120,10 123,10 123,17 " />
                            <polygon className="fill12 animArrowUp" points="142,17 137,10 132,17 135,17 135,24 139,24 139,17 " />
                        </g>

                        {/* Budynek */}
                        <polygon className="fill11" points="4,38 37,22 69,38 69,69 49,69 49,47 24,47 24,69 4,69 " />
                        {/* Drzwi budynku */}
                        <rect className="fill12" x="26" y="49" width="20.493" height="20.3005" />
                        {/* Okno budynku */}
                        <rect className="fill10" x="31" y="34" width="11.5431" height="7.83314" />
                        <line className="fillNone11-02" x1="31" y1="38" x2="42.5" y2="38" />
                        <line className="fillNone11-02" x1="37" y1="42" x2="37" y2="34" />
                        {/* Komin */}
                        <polygon className="fill00" points="14,17 19,17 19,26 14,28 " />
                        {/* Dach */}
                        <polygon className="fill12" points="0,35 37,16 73,35 73,38 37,19 0,38 " />
                        {/* Polbruk budynku */}
                        <polygon className="fill00" points="20,70 53,70 48,75 26,75 " />

                        {/* Magistrala chmurowa */}
                        <rect className="fill06" x="126" y="28.5" width="6.02735" height="58.5" />

                        {/* Magistrala chmurowa - linia czarna */}
                        <line className="fillNone00-1" x1="129" y1="87" x2="129" y2="29" />

                        {/* Środkowa magistrala */}
                        <rect className="fill06" x="85" y="45" width="6.02735" height="55.2507" />
                        <rect className="fill06" x="85" y="45" width="41" height="6.02735" />
                        {/* Środkowa cienka magistrala */}
                        <line className="fillNone00-1" x1="88" y1="100" x2="88" y2="47.5" />
                        <line className="fillNone00-1" x1="127" y1="48" x2="88" y2="48" />
                        <line className="fillNone00-05" x1="88" y1="94" x2="7" y2="94" />


                        {/* Modem Nr1 */}
                        <g>
                            <rect className="fill00" transform="matrix(1.75239E-13 -2.02368 1.32333 1.07193E-14 36.2786 95.0047)" width="9.9" height="0.5" />
                            <rect className="fill00 animModem1Snd" x="31.5" y="92" width="5.31666" height="4.25397" />
                            <rect className="fill00 animModem1Rcv" x="36.5" y="92" width="5.31666" height="4.25397" />
                        </g>

                        {/* Modem Nr2 */}
                        <g>
                            <rect className="fill00 animModem2Rcv" transform="matrix(2.80341E-14 -1.05851 1.51238 4.00547E-14 126.99 53.1949)" width="5.02279" height="2.81276" />
                            <rect className="fill00 animModem2Snd" transform="matrix(2.80341E-14 -1.05851 1.51238 4.00547E-14 126.99 47.8774)" width="5.02279" height="2.81276" />
                        </g>


                        {/* Serwer 1 Obudowa */}
                        <rect className="fill11" x="106" y="67" width="46.2097" height="9.03616" rx="2" ry="2" />
                        {/* Serwer 1 Kieszenie */}
                        <rect className="fillNone00-01" x="109" y="69" width="9.44284" height="1.8082" />
                        <rect className="fillNone00-01" x="119" y="69" width="9.44284" height="1.8082" />
                        {/* Serwer 1 LED-y */}
                        <rect className="fill10" x="130" y="69" width="1.30593" height="1.8082" />
                        <rect className="fill12" x="131" y="69" width="1.30593" height="1.8082" />
                        {/* Serwer 1 Power */}
                        <rect className="fill00" x="146" y="73" width="4.24123" height="1.18755" />

                        {/* Serwer 2 Obudowa */}
                        <rect className="fill11" x="106" y="77" width="46.2097" height="9.03616" rx="2" ry="2" />
                        {/* Serwer 2 Kieszenie */}
                        <rect className="fillNone00-01" x="109" y="79" width="9.44284" height="1.8082" />
                        <rect className="fillNone00-01" x="119" y="79" width="9.44284" height="1.8082" />

                        {/* Serwer 2 Power */}
                        <rect className="fill00" x="146" y="83" width="4.24123" height="1.18755" />

                         {/* Serwer 2 LED-y */}
                        <rect className="fill10" x="130" y="79" width="1.30593" height="1.8082" />
                        <rect className="fill12" x="131" y="79" width="1.30593" height="1.8082" />
                        
                        {/* Serwer 3 Obudowa */}
                        <rect className="fill11" x="106" y="87" width="46.2097" height="9.03616" rx="2" ry="2" />
                        {/* Serwer 3 Power */}
                        <rect className="fill00" x="146" y="93" width="4.24123" height="1.18755" />

                        {/* Serwer 3 Kieszenie dysków */}
                        <rect className="fillNone00-01" x="108" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="111" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="114" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="117" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="120" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="123" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="126" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="129" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="132" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="135" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="138" y="88" width="2.00911" height="7.03192" />
                        <rect className="fillNone00-01" x="141" y="88" width="2.00911" height="7.03192" />

                        {/* Serwer 3 LED-y */}
                        <rect className="fill10" x="146" y="88" width="1.30593" height="1.8082" />
                        <rect className="fill12" x="148" y="88" width="1.30593" height="1.8082" />

                        {/* Serwer 3 Led-y dysków */}
                        <rect className="fill10" x="108" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="111" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="114" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="117" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="120" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="123" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="126" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="129" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="132" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="135" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="138" y="88" width="2.00912" height="1.00456" />
                        <rect className="fill10" x="141" y="88" width="2.00912" height="1.00456" />

                        <g id="padlockUp">
                            <rect className="fill06" x="153" y="27" width="8" height="6" rx="1" ry="1" />
                            <circle className="fill10" cx="157" cy="29" r="1" />
                            <path className="fill06" d="
                            M 154 26.5
                            q 3 -6 6 0
                            L 159 26.5
                            q -2 -2 -4 0
                            L 154 26.5
                            " />
                            <polygon className="fill10" points="157,29 158,32 156,32 " />
                        </g>

                        <g id="padlockDown">
                            <rect className="fill06" x="153" y="94" width="8" height="6" rx="1" ry="1" />
                            <circle className="fill10" cx="157" cy="96" r="1" />
                            <path className="fill06" d="
                            M 154 93.5
                            q 3 -6 6 0
                            L 159 93.5
                            q -2 -2 -4 0
                            L 154 93.5
                            " />
                            <polygon className="fill10" points="157,96 158,99 156,99 " />
                        </g>
                    </g>
                </svg>

            </section>
        </React.Fragment >
    );
}

export default BannerSVG;