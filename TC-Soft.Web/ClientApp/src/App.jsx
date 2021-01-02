import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ImplementationsPage from './pages/ImplementationsPage';
import GdprPage from './pages/GdprPage';
import CookiesPage from './pages/CookiesPage';
import usePageTracking from './components/usePageTracking';

import './styles/main.scss';

function App() {
  usePageTracking();
  return (
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/implementations">
          <ImplementationsPage />
        </Route>
        <Route exact path="/gdpr">
          <GdprPage />
        </Route>
        <Route exact path="/cookies">
          <CookiesPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
  );
}

export default App;
