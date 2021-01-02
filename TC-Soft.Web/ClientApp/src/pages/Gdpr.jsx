import React from 'react';
import Header from '../components/Header';
import GdprInfo from '../components/GDPR/GdprInfo';
import Footer from '../components/Footer';
import '../styles/pages/Gdpr.scss';

function Gdpr() {
  return (
    <React.Fragment>
        <Header />
        <GdprInfo />
        <Footer />
    </React.Fragment>
  );
}

export default Gdpr;
