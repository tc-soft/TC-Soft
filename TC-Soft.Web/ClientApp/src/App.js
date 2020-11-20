import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Implementations from './pages/Implementations';
import Gdpr from './pages/Gdpr';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/implementations">
            <Implementations />
          </Route>
          <Route exact path="/gdpr">
            <Gdpr />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
