import React from 'react';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.scss';

const SOCIAL = [
  {
    id: 0,
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/piotr-knia%C5%BA-8b4484151/',
  },
  {
    id: 1,
    icon: faInstagram,
    url: 'https://www.instagram.com/freedomcode_/',
  },
  {
    id: 2,
    icon: faGithub,
    url: 'https://github.com/pio-kniaz',
  },
];

const Social: React.FC = () => (
  <div className="social">
    {SOCIAL.map(({ id, icon, url }) => (
      <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="social__icon">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
        />
      </a>
    ))}
  </div>
);

export default Social;
