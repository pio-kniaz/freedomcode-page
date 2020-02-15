import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AboutPage from 'pages/about-page/AboutPage';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={AboutPage} />
    </Switch>
  </Router>
);
export default Routes;
