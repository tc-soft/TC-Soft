import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import HomeInfo from '../components/Home/HomeInfo';
import Authorizations from '../components/Home/Authorizations';
import Footer from '../components/Footer';
import '../styles/pages/Home.scss';

function Home() {

  return (
    <React.Fragment>
        <Header />
          <Banner />
          <HomeInfo />
          <Authorizations />
        <Footer />
    </React.Fragment>
  );
}

export default Home;
