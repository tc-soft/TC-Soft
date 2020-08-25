import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Banner />
        <Articles />
        <Footer />
    </React.Fragment>
  );
}

export default App;
