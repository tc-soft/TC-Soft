import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ImplementationsPage from './pages/ImplementationsPage';
import InstructionsPage from './pages/InstructionsPage';
import ContactPage from './pages/ContactPage';
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
        <Route exact path="/instructions">
          <InstructionsPage />
        </Route>
        <Route exact path="/instructions/:id">
          <InstructionsPage />
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
