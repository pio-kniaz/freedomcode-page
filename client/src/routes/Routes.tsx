import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AboutPage from 'pages/about-page/AboutPage';
import HomePage from 'pages/home-page/HomePage';
import ContactPage from 'pages/contact-page/ContactPage';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage/>
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
);
export default Routes;
