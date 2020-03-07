import React from 'react';
import './main-layout.scss';

import Navigation from 'components/shared/navigation/Navigation';
import Social from 'components/shared/social/Social';

type Props = {
  children: React.ReactNode,
}

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <main className="main-layout">
        {children}
        <Social />
      </main>
    </>
  );
};

export default MainLayout;
