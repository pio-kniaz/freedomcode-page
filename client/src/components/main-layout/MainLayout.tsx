import React from 'react';
import './main-layout.scss';

import Navigation from 'components/shared/navigation/Navigation';

type Props = {
  children: React.ReactNode,
}

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <main className="main-layout">
      <Navigation />

      {children}
    </main>
  );
};

export default MainLayout;
