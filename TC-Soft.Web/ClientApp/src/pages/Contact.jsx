import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactQRCode from '../components/Contact/ContactQRCode';
import Footer from '../components/Footer';
import '../styles/pages/Contact.scss';

function Contact() {
  return (
    <React.Fragment>
        <Header />
          <div className="contact">
            <ContactForm />
            <ContactInfo />
            <ContactQRCode />
          </div>        
        <Footer />
    </React.Fragment>
  );
}

export default Contact;
