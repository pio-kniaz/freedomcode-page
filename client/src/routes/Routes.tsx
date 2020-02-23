import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AboutPage from 'pages/about-page/AboutPage';
import HomePage from 'pages/home-page/HomePage';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </Router>
);
export default Routes;
