import React from 'react';

function GdprInfo() {
    return (
        <React.Fragment>
            <section className="gdpr">

                <h3>Klauzula infrormacyjna - formularz kontaktowy</h3>

                <p>
                    Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu Europejskiego i Rady UE 
                    2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z 
                    przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz 
                    uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), dalej jako RODO, 
                    informujemy, że:
                </p>

                <ul className="gdpr__mainPoint">
                    <li>
                        Administratorem Pani/Pana danych jest firma<br/>
                        <strong>
                        Usługi Informatyczne - Administracja Sieci Komputerowych Tadeusz Ciszewski
                        </strong>
                        <br/>
                        z siedzibą w Świdwinie przy ul. Katowicka 5/30
                        NIP: PL6721373450, tel. +48 502 600 121, e-mail:&nbsp;
                        <a
                            href="mailto:office@tc-soft.pl?subject=Kontakt%20WEB&body=Napisz%20coś"
                            target="_blank"
                            rel="noopener noreferrer">
                            office@tc-soft.pl
                        </a>
                    </li>
                    <li>
                        Pani/Pana dane osobowe będą chronione i przetwarzane w celu:

                        <ul className="gdpr__subPoint">
                            <li>
                                Prowadzenia z Panią/Panem korespondencji i obsługi sprawy, której ona dotyczy oraz 
                                w celu ewentualnego dochodzenia roszczeń lub obrony przed takimi roszczeniami – podstawą prawną jest 
                                prawnie uzasadniony interes ADO zgodnie z art. 6 ust. 1 lit f RODO – tj. obsługa spraw zgłoszonych przez formularz, 
                                prowadzenie korespondencji z zainteresowanymi podmiotami i obsługa zgłaszanych przez nich spraw.
                            </li>
                            <li>
                                Przedstawienia oferty, oraz umożliwienia złożenia i realizacji zamówień oraz zawierania umów sprzedaży 
                                produktów czy usług oferowanych przez firmę (na podstawie art. 6 ust. 1 lit. (b) RODO), 
                                jeżeli zapytanie wysłane przez formularz zawierało prośbę o ofertę.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Pani/Pana dane osobowe będą przechowywane przez okres niezbędny do realizacji celu, 
                        na który wyraziła Pani/Pan zgodę, z systematyczną kontrolą oceny ich przydatności, 
                        nie dłużej niż co 3 lata od daty ich wprowadzenia. 
                        Okres przetwarzania danych osobowych może zostać każdorazowo przedłużony o okres przedawnienia roszczeń, 
                        jeżeli przetwarzanie danych osobowych będzie niezbędne dla dochodzenia ewentualnych roszczeń 
                        lub obrony przed takimi roszczeniami przez ADO. 
                        W zakresie, w jakim dane przetwarzane są w celu kierowania do Pani/Pana treści marketingowych, 
                        będą przetwarzane do czasu wycofania zgody lub wniesienia sprzeciwu względem takiego przetwarzania.
                    </li>
                    <li>
                        Pani/Pana dane nie będą przekazywane innym podmiotom poza: dostawcom systemów informatycznych i usług IT, 
                        podmiotom świadczącym na rzecz firmy usługi niezbędne do wykonania zawieranej z Panią/Panem umowy 
                        w tym usługi prawne, operatorom pocztowym i kurierom, bankom w zakresie realizacji płatności, 
                        niektórym osobom wykonującym regulowane zawody, takim jak prawnicy.
                    </li>
                    <li>
                        Przysługuje Pani/Panu prawo: dostępu do treści danych osobowych, 
                        w tym żądania wydania ich kopii oraz żądania ich sprostowania, 
                        usunięcia danych osobowych (prawo do bycia zapomnianym), 
                        ograniczenia przetwarzania danych osobowych, 
                        prawo do przenoszenia danych osobowych do innego administratora, 
                        prawo wniesienia sprzeciwu względem przetwarzania danych osobowych, 
                        w tym profilowania, oraz na potrzeby marketingu bezpośredniego, do cofnięcia zgody w przypadku, 
                        gdy spółka będzie przetwarzać Pani/Pana dane osobowe w oparciu o zgodę, 
                        w dowolnym momencie i w dowolny sposób, bez wpływu na zgodność z prawem przetwarzania, 
                        którego dokonano na podstawie zgody przed jej wycofaniem. 
                        Przysługuje Pani/Panu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, 
                        gdy uzna Pani/Pan, że przetwarzanie danych osobowych narusza przepisy RODO.
                    </li>
                    <li>
                        Przysługuje Pani/Panu prawo wniesienia sprzeciwu względem przetwarzania danych osobowych 
                        w celu kierowania do Pani/Pana treści marketingowych. 
                        Ponadto względem przetwarzania danych osobowych dla celów wynikających 
                        z prawnie usprawiedliwionych interesie firmy przysługuje Pani/Panu prawo 
                        wniesienia sprzeciwu z przyczyn związanych z Pani/Pana szczególną sytuacją.
                    </li>
                    <li>
                        Podanie przez Pana/Panią danych osobowych jest dobrowolne.
                    </li>
                </ul>
            </section>
        </React.Fragment >
    );
}

export default GdprInfo;