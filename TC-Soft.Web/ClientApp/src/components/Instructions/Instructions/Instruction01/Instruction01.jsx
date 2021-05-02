import React from 'react';
import '../../../../styles/pages/Instructions.scss';

import picture01 from'./1.jpg';
import picture02 from'./2.jpg';
import picture03 from'./3.jpg';
import picture04 from'./4.jpg';
import picture05 from'./5.jpg';
import picture06 from'./6.jpg';

function Instruction01() {
    return (
        <React.Fragment>
            <section className="instructionDetail">

                <h3>Asystent nieobecności w systemie poczty Exchange</h3>

                <p>
                    Instrukcja opisuje sposób ustawienia automatycznej odpowiedzi dla wiadomości przychodzących w programie Outlook przy współpracy z kontem Microsoft Exchange.
                    Instrukcja dotyczy programu Outlook 2016, 2019.
                </p>

                <ul className="instructionDetail__mainPoint">
                    <li>
                        Aby uruchomić usługę należy w programie Outlook z menu [Plik] wybrać opcję [Odpowiedzi automatyczne].

                        <img  src={picture01} alt="picture01"/>
                    </li>

                    <li>
                        W wyświetlonym okienku zaznaczamy opcje [Wyślij odpowiedzi automatycznie].
                        <img  src={picture02} alt="picture02"/>
                        Jeżeli chcemy wybrać zakres dat w którym odpowiedzi automatyczne mają działać,
                         to zaznaczamy przycisk [Wyślij tylko w tym zakresie godzin] i wybieramy datę rozpoczęcia oraz datę zakończenia działania usługi.
                    </li>
                    <li>
                        Następnie wybieramy jak poniżej zakładkę [Poza moją organizacją] oraz przycisk [Każda osoba spoza mojej organizacji] i w okienku wpisujemy treść autorespondera.
                        <img  src={picture03} alt="picture03"/>
                        Analogicznie jak powyżej możemy ustawić inną treść autorespondera, która będzie działać tylko w obrębie organizacji.
                        Jest to dostępne na zakładce [W mojej organizacji].
                    </li>
                    <li>
                        Jeśli chcemy aby wiadomośc została automatycznie przekazana dalej, to wybieramy na dole w okienku opcję [Reguły].
                        <img  src={picture04} alt="picture04"/>
                        a nastepnie zaznaczamy [Prześlij] i wybieramy z listy lub wpisujemy rećznie konto na które ma byc przekazana wiadomość.
                        <img  src={picture05} alt="picture05"/>
                        Po zatwierdzeniu przycisku OK, reguła powinna być widoczna w okienku.
                        Zatwierdzamy wszystkie okienka przyciskiem OK. To wszystko... Reguła działa, można wyłączyć komputer.
                    </li>
                    <li>
                        Jesli chcemy wyłączyć autoresponder, wybieramy w programie Outlook z menu [Plik] opcję [Odpowiedzi automatyczne] i odznaczamy opcję []
                        <img  src={picture06} alt="picture06"/>
                        i naciskamy przycisk OK. Treść wpisanych wczesniej wiadomości autorespondera pozostaną zapamiętane.
                        Należy pamiętać, że jeśli użylismy opcji użycia usługi w okreslonym czasie, to nie musimy jej wyłączać - usługa sama przestanie działać.
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

export default Instruction01;