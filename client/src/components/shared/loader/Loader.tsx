import React from 'react';
import './loader.scss';

type defaultProps = {
  size?: string,
}

type Props = {
  size?: string,
}

const Loader: React.FC<Props> = (props) => {
  const { size } = props;
  return <div className="loader" style={{ fontSize: size }} />;
};

Loader.defaultProps = {
  size: '4rem',
};

export default Loader;
