import React from 'react';
import Instruction1 from './Instruction1';
import Instruction2 from './Instruction2';
import Instruction3 from './Instruction3';
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
            </section>
        </React.Fragment>
    );
}

export default InstructionsInfo;