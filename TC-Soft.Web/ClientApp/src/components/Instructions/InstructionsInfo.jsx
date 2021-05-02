import React from 'react';
import Instruction1 from './Instruction1';
// eslint-disable-next-line
import Instruction2 from './Instruction2';
// eslint-disable-next-line
import Instruction3 from './Instruction3';
// eslint-disable-next-line
import Instruction4 from './Instruction4';

function InstructionsInfo() {
    return (
        <React.Fragment>
            <section className="instructions">
                <h3 className="instructions__title">Instrukcje</h3>
                <p className="instructions__description">Lista instrukcji ogólnych dla użytkowników również do pobrania w formacie PDF</p>
                <Instruction1
                    title="Poczta"
                    date="14.02.2021 r."
                    name="Asystent w czasie nieobecności w systemie poczty Exchange"
                    description="Instrukcja opisująca ustawienie autorespondera poczty Exchange w programie Outlook"
                    link="/Instructions/Instruction01"
                />
                <Instruction1
                    title="Poczta"
                    date="18.04.2021 r."
                    name="Konfiguracja konta Exchange na systemach Android"
                    description="Instrukcja opisująca konfigurację poczty Exchange na telefonach z systemem Android"
                    link="/Instructions/Instruction02"
                />
                <Instruction1
                    title="Poczta"
                    date="18.04.2021 r."
                    name="Konfiguracja konta Exchange na systemach iOS"
                    description="Instrukcja opisująca konfigurację poczty Exchange na telefonach z systemem iOS"
                    link="/Instructions/Instruction03"
                />
            </section>
        </React.Fragment>
    );
}

export default InstructionsInfo;