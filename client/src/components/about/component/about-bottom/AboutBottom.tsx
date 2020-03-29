import React from 'react';
import './about-bottom.scss';

const AboutBottom: React.FC = () => (
  <div className="about-bottom row">
    <div className="about-bottom__image col-lg-4">
      <div className="about-bottom__me" />
    </div>
    <div className="about-bottom__desc col-lg-8 col-md-12">
      <div className="about-bottom__content">
        <h2>Personal</h2>
        <p>
          Hey my name is Piotr and
          {' '}
          <strong>I do my passion for a living!</strong>
        </p>
        <p>
          I am glad that I have clean bill of health, lovely girl and beautiful dog.
          <br />
          I like mountain expedition , skiing and traveling.
          I live my passion and I like develop myself and keep trying, everyday,
          to be a more experienced and better programmer.
        </p>
      </div>
    </div>
  </div>
);

export default AboutBottom;
