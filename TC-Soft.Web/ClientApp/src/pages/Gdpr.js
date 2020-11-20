import React from 'react';

import Header from '../components/Header';
import GdprInfo from '../components/GDPR/GdprInfo';
import Footer from '../components/Footer';

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
