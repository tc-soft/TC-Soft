import React from 'react';
import Header from '../components/Header';
import CookiesInfo from '../components/Cookies/CookiesInfo';
import Footer from '../components/Footer';
import '../styles/pages/Cookies.scss';

function CookiesPage() {
  return (
    <React.Fragment>
        <Header />
        <CookiesInfo />
        <Footer />
    </React.Fragment>
  );
}

export default CookiesPage;
