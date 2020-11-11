import React from 'react';

function ImplementationsInfo() {
    return (
        <React.Fragment>
            <section className="implementations">
                <table className="implementations__table">
                    <tr>
                        <th className="implementations__company">Nazwa firmy</th>
                        <th className="implementations__detail">Opis wdrożenia</th>
                        <th className="implementations__date">Data</th>
                    </tr>
                    <tr>
                        <td>Fleisch Mannschaft Polska Sp. z o.o. Świdwin</td>
                        <td>Budowa sieci komputerowej. Wdrożenie serwera IBM xSeries. Migracja danych.</td>
                        <td>01.2005 r.</td>
                    </tr>
                    <tr>
                        <td>Z.P.U. PA-MET Świdwin Adam Paprocki Sp. K.</td>
                        <td>Budowa sieci komputerowej, szafa rack 42U. Wdrożenie serwera IBM xSeries. Migracja danych, baz
                    danych.</td>
                        <td>09.2006 r.</td>
                    </tr>
                    <tr>
                        <td>P.P.H.U. PLASTPOM Świdwin</td>
                        <td>Wdrożenie serwera IBM xSeries. Migracja baz danych.</td>
                        <td>11.2006 r.</td>
                    </tr>
                    <tr>
                        <td>Przedsiębiorstwo Budowlane IN-TECH Świdwin</td>
                        <td>Wdrożenie serwera IBM xSeries. Migracja baz danych.</td>
                        <td>02.2007 r.</td>
                    </tr>
                    <tr>
                        <td>Park Wodny RELAX</td>
                        <td>Wdrożenie serwera HP Proliant. Windows Serwer / AD. Migracja danych.</td>
                        <td>08.2011 r.</td>
                    </tr>
                    <tr>
                        <td>Pomerania FRUCHT Sp. z o.o.</td>
                        <td>Wdrożenie serwera HP Proliant. Windows Serwer / AD. Migracja danych.</td>
                        <td>12.2011 r.</td>
                    </tr>
                    <tr>
                        <td>P.P.H.U. Walerian Grzegorz FABICH</td>
                        <td>Wdrożenie serwera HP Proliant. Windows Serwer / AD. Migracja danych.</td>
                        <td>02.2012 r.</td>
                    </tr>
                    <tr>
                        <td>Publiczna Szkoła Podstawowa Nr1 im. Orła Białego w Świdwinie</td>
                        <td>Wdrożenie serwera HP Proliant w pracowni komputerowej, Active Directory, centralny profil dla
                    uczniów.</td>
                        <td>10.2012 r.</td>
                    </tr>
                    <tr>
                        <td>ZUK Świdwin</td>
                        <td>Budowa sieci komputerowej, montaż szafy rack. Wdrożenie serwera Dell. Wdrożenie Windows Server.</td>
                        <td>08.2014 r.</td>
                    </tr>
                    <tr>
                        <td>Fabryka Okien PCV KARABELA Świdwin</td>
                        <td>Budowa sieci komputerowej, montaż szafy rack. Wdrożenie serwera Dell, Wirtualizacja serwerów
                    produkcyjnych.</td>
                        <td>11.2014 r.</td>
                    </tr>
                    <tr>
                        <td>Przedsiębiorstwo Budowlane IN-TECH Świdwin</td>
                        <td>Budowa sieci komputerowej, budowa serwerowni opartej o wirtualizację.</td>
                        <td>12.2014 r.</td>
                    </tr>
                    <tr>
                        <td>Pomerania FRUCHT Sp. z o.o.</td>
                        <td>Budowa serwerowni opartej o Cluster vSphere, cztery szafy 22U, ponad 10 przełączników HPE Aruba. UPS
                    Delta 5kVA redundantny z bypass - dwa moduły mocy.</td>
                        <td>03.2017 r.</td>
                    </tr>
                    <tr>
                        <td>Park Wodny RELAX Świdwin</td>
                        <td>Budowa serwerowni opartej o Cluster vSphere, szafa 22U. Migracja danych</td>
                        <td>12.2019 r.</td>
                    </tr>
                </table>
            </section>
        </React.Fragment >
    );
}

export default ImplementationsInfo;