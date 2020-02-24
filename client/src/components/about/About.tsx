import React from 'react';
import './about.scss';

interface Props {

}

const About: React.FC = () => (
  <div className="about">
    <div className="about__wrapper">
      <h2 className="about__title">
        Wow , a whole page just about me!
      </h2>
    </div>
  </div>
);

export default About;
