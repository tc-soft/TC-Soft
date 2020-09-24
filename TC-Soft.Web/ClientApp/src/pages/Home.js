import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import MainSection from '../components/MainSection';
import Authorizations from '../components/Authorizations';
import Footer from '../components/Footer';

function Home() {
  return (
    <React.Fragment>
        <Header />
        <Banner />
        {/* <Articles /> */}
        <MainSection />
        <Authorizations />
        <Footer />
    </React.Fragment>
  );
}

export default Home;
