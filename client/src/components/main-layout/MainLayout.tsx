import React from 'react';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Navigation />
      <main className="main-layout">
        {children}
        <Social />
      </main>
    </>
  );
};

export default MainLayout;
