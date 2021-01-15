import React from 'react';
import Header from '../components/Header';
import InstructionsInfo from '../components/Instructions/InstructionsInfo';
import Footer from '../components/Footer';
import '../styles/pages/Instructions.scss';

function InstructionsPage() {
  return (
    <React.Fragment>
        <Header />
        <InstructionsInfo />
        <Footer />
    </React.Fragment>
  );
}

export default InstructionsPage;
