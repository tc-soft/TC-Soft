import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Content from '../components/Home/Content';
import Authorizations from '../components/Home/Authorizations';
import Footer from '../components/Footer';
import '../styles/pages/Home.scss';

function HomePage() {

  return (
    <React.Fragment>
        <Header />
          <Banner />
          <Content />
          <Authorizations />
        <Footer />
    </React.Fragment>
  );
}

export default HomePage;
