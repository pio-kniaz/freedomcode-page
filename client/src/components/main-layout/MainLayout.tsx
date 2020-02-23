import React from 'react';
import './main-layout.scss';

type Props = {
  children: React.ReactNode,
}

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <main className="main-layout">
      {children}
    </main>
  );
};

export default MainLayout;
