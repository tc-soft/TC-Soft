import React from 'react';
import './Authorizations.scss';

function Authorizations() {
    return (
        <React.Fragment>
            <section className="authorizations">
                <h3>Partnerstwa / autoryzacje</h3>
                <br />
                <img src="./MicrosoftPartner.jpg" className="authorizations__Microsoft" alt="Microsoft logo"></img>
                <img src="./VMWare.png" className="authorizations__VMWare" alt="WMWare logo"></img>
                <img src="./Veeam.png" className="authorizations__Veeam" alt="Veeam logo"></img>
                <img src="./ESET.png" className="authorizations__ESET" alt="ESET logo"></img>
                <img src="./KiR.png" className="authorizations__KiR" alt="KiR logo"></img>
                <img src="./InsERT.png" className="authorizations__InsERT" alt="InsERT logo"></img>
            </section>
        </React.Fragment>
    );
}

export default Authorizations;