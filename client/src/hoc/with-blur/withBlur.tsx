import React from 'react';

const withBlur = (Component: React.FC) => (props: any) => (
  <div className="blur">
    <Component {...props} />
  </div>
);

export default withBlur;
