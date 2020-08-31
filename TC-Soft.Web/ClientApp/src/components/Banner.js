import React from 'react';

function Banner() {
    return (
        <React.Fragment>
            <section className="banner">
                <svg className="banner__svg" xmlns="http://www.w3.org/2000/svg" height="70px" version="1.1"
                    viewBox="0 0 465 287">
                    <g>
                        <circle className="fil2" cx="117" cy="50" r="48" />
                        <path className="fil1" d="M214 96l154 1c10,0 12,4 11,11l-22 108 -176 0 22 -108c1,-7 2,-11 11,-12z" />
                        <path className="fil2" d="M0 238l364 0c8,0 14,7 14,14l0 21c0,7 -6,14 -14,14l-350 0c-8,0 -14,-7 -14,-14l0 -35z" />
                        <circle className="fil2" cx="277" cy="167" r="11" />
                        <path className="fil1"
                            d="M0 139c6,-32 32,-51 55,-53 20,21 28,28 54,33 10,13 14,26 15,38l-55 0 1 -27c0,-12 -23,-12 -23,0l0 39c0,8 4,11 10,11l73 0c16,0 36,23 36,36l-166 0 0 -77z" />
                        <path className="fil2"
                            d="M399 1l12 0c6,0 -2,12 -3,19l0 25 4 0 2 3 0 18c10,20 1,30 -6,30l-6 0c-6,0 -16,-13 -6,-30l1 -18 2 -3 3 0 0 -25c-1,-7 -9,-19 -3,-19z" />
                        <path className="fil2"
                            d="M425 20c0,-11 8,-19 14,-20l3 2 0 18c0,3 6,3 6,0l0 -18 2 -2c10,3 15,10 15,20 0,9 -7,13 -11,17l5 47c-1,16 -29,16 -28,0l5 -47c-5,-3 -11,-7 -11,-17z" />
                        <circle className="fil4" cx="445" cy="82" r="3" />
                    </g>
                </svg>
                <div>
                    <h2 className="banner__title">Outsourcing IT dla firm</h2>
                    <p className="banner__info">Budowa i utrzymanie małych serwerowni, dostawa sprzętu.</p>
                </div>
            </section >
        </React.Fragment>
    );
}

export default Banner;