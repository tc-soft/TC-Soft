import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Implementations from './pages/Implementations';
import Gdpr from './pages/Gdpr';
import Cookies from './pages/Cookies';
import usePageTracking from './components/usePageTracking';
import './styles/main.scss';

function App() {
  usePageTracking();
  return (
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
        <Route exact path="/cookies">
          <Cookies />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
  );
}

export default App;
