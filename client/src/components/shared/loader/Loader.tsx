import React from 'react';
import './loader.scss';

type DefaultProps = {
  size?: string,
}

type Props = {
  size?: string,
}

const Loader: React.FC<Props & DefaultProps> = (props) => {
  const { size } = props;
  return <div className="loader" style={{ fontSize: size }} />;
};

Loader.defaultProps = {
  size: '4rem',
};

export default Loader;
