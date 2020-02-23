import React from 'react';
import './home-page.scss';

import MainLayout from 'components/main-layout/MainLayout';
import Home from 'components/home/Home';

const HomePage: React.FC = () => (
  <div className="home-page">
    <MainLayout>
      <Home />
    </MainLayout>
  </div>
);

export default HomePage;
