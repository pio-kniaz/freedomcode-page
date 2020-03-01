import React from 'react';

import './about-page.scss';
import MainLayout from 'components/main-layout/MainLayout';
import About from 'components/about/component/about/About';

const AboutPage: React.FC = () => (
  <div className="about-page">
    <MainLayout>
      <About />
    </MainLayout>

  </div>
);

export default AboutPage;
