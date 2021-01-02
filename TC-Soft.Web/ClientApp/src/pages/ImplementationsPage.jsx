import React from 'react';
import Header from '../components/Header';
import ImplementationsInfo from '../components/Implementations/ImplementationsInfo';
import Footer from '../components/Footer';
import '../styles/pages/Implementations.scss';

function Implementations() {
  return (
    <React.Fragment>
        <Header />
        <ImplementationsInfo />
        <Footer />
    </React.Fragment>
  );
}

export default Implementations;
