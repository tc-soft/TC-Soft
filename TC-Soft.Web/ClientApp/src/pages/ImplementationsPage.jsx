import React from 'react';
import Header from '../components/Header';
import ImplementationsInfo from '../components/Implementations/ImplementationsInfo';
import Footer from '../components/Footer';
import '../styles/pages/Implementations.scss';

function ImplementationsPage() {
  return (
    <React.Fragment>
        <Header />
        <ImplementationsInfo />
        <Footer />
    </React.Fragment>
  );
}

export default ImplementationsPage;
