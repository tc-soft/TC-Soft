import React from 'react';
import ContactForm from './Contact/ContactForm';
import ContactInfo from './Contact/ContactInfo';
import ContactQRCode from './Contact/ContactQRCode';

function ContactBody() {
    return (
        <React.Fragment>
            <div className="contact">
                <ContactForm />
                <ContactInfo />
                <ContactQRCode />
            </div>
        </React.Fragment>
    );
}

export default ContactBody;