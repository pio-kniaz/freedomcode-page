import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faEnvelope, faHome,
} from '@fortawesome/free-solid-svg-icons';

import './navigation.scss';

const Navigation: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation__ul">
      <li className="navigation__li">
        <NavLink
          activeClassName="navigation__a--active"
          className="navigation__a btn"
          exact
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </li>
      <li className="navigation__li">
        <NavLink
          activeClassName="navigation__a--active"
          className="navigation__a btn"
          exact
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </li>
      <li className="navigation__li">
        <NavLink
          activeClassName="navigation__a--active"
          className="navigation__a btn"
          exact
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
