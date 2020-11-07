import React from 'react';

function ContactInfo() {
    return (
        <React.Fragment>
            <section className="contact__form">
                <h3 className="contact__title">Dane kontaktowe</h3>
                <p>
                    <strong>Nazwa firmy : </strong>Uslugi Informatyczne - Administracja Sieci Komputerowych<br />
                    Tadeusz Ciszewski<br />
                    <strong>Adres : </strong>ul. Katowicka 5/30, 78-300 Świdwin<br />
                    <strong>NIP : </strong>PL6721373450<br /><br />
                    <strong>Telefon : </strong>502600121<br />
                    <strong>E-mail : </strong>office@tc-soft.pl<br />
                    <strong>Bank : </strong>PKO INTELIGO<br />
                    <strong>Nr rachunku bankowego : </strong>51 1020 21234 241 12412 1241 124
                </p>
                <br />
                <h3 className="contact__helpdesk">HELP DESK</h3>
                <p>
                    <strong>Telefon : </strong>502600121<br />
                    <strong>E-mail : </strong>office@tc-soft.pl<br />
                </p>
            </section>
        </React.Fragment>
    );
}

export default ContactInfo;