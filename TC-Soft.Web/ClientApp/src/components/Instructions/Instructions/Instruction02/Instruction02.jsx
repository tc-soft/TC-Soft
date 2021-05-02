import React from 'react';
import '../../../../styles/pages/Instructions.scss';

import picture01 from'./01.png';
import picture02 from'./02.png';
import picture03 from'./03.png';
import picture04 from'./04.png';
import picture05 from'./05.png';
import picture06 from'./06.png';
import picture07 from'./07.png';
import picture08 from'./08.png';

function Instruction02() {
    return (
        <React.Fragment>
            <section className="instructionDetail">

                <h3>Konfiguracja konta Exchange na telefonach z systemem Android</h3>

                <p>
                    Dokument opisuje sposób konfiguracji konta pocztowego Exchange na telefonach komórkowych z system Android.
                </p>

                <ul className="instructionDetail__mainPoint">
                    <li>
                        Do konfiguracji konta potrzebujemy dane otrzymane od Administratora :<br />
                        • nazwa konta E-mail,<br />
                        • hasło<br />
                    </li>

                    <li>
                        Pobieramy oraz instalujemy za pomocą Sklepu Play aplikację Microsoft Outlook - ikonka jak na rysunku poniżej. 
                        Należy mieć aktywne konto usługi google oraz dostęp do internetu.
                        <img  src={picture01} style={{ width: "10%", height: "10%" }} alt="picture01"/>
                    </li>
                    <li>
                        Uruchamiamy aplikację i jeśli to jest pierwsze konto, wpisujemy pełną nazwę naszego konta E-mail i naciskamy przycisk [Dodaj konto].
                        <img  src={picture02} alt="picture02"/>
                    </li>
                    <li>
                        W następnym kroku wpisujemy hasło i naciskamy [Zaloguj się], jak w okienku poniżej.
                        <img  src={picture03} alt="picture03"/>
                    </li>
                    <li>
                        W zależności od konfiguracji zabezpieczeń konta może pojawić się komunikat z dodatkowymi czynnościami do wykonania jak na przykładzie poniżej.
                        Postępujemy w/g zaleceń, aby uwierzytelnić dostęp.
                        <img  src={picture04} alt="picture04"/>
                        Jeśli okienko będzie zawierało możliwość pominięcia dodatkowych zabezpieczeń – wybieramy [Pomiń].
                    </li>
                    <li>
                        Zapoznaj się z funkcjami i sprawnie rozpocznij korzystanie z aplikacji Outlook.
                        <img  src={picture05} alt="picture05"/>
                    </li>
                    <li>
                        Po zakończeniu konfiguracji można ustawić automatyczny podpis do wysyłanych wiadomości.
                        Uruchamiamy kolejno ikonę konfiguracji{'->'}ustawienia`{'->'}`Podpisy jak na rysunkach poniżej.
                        <img  src={picture06} style={{ width: "30%", height: "30%" }} alt="picture06"/>
                        <img  src={picture07} alt="picture07"/>
                        <img  src={picture08} alt="picture08"/>
                    </li>
                    <li>
                        Wpisujemy treść podpisu. Podpis może zawierać tylko tekst, nie jest możliwe wstawienie loga firmy lub znaku graficznego.
                    </li>

                    <br /><br />
                    <p>
                        W razie problemów lub propozycji zmian w instrukcji, proszę pisać.<br />
                        Tadeusz Ciszewski
                    </p>

                </ul>
            </section>
        </React.Fragment >
    );
}

export default Instruction02;