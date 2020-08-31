import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import BannerSVG from '../components/BannerSVG';
import Articles from '../components/Articles';
import Authorizations from '../components/Authorizations';
import Footer from '../components/Footer';

function Home() {
  return (
    <React.Fragment>
        <Header />
        <Banner />
        <BannerSVG />
        <Articles />
        <Authorizations />
        <Footer />
    </React.Fragment>
  );
}

export default Home;
