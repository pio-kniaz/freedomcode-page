/* eslint-disable react/button-has-type */
import React from 'react';
import './button.scss';

type DefaultProps = {
  variant?: string,
}

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: 'submit' | 'reset' | 'button';
  value?: string | string[] | number;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary'
}


const Button: React.FC<Props & DefaultProps> = (props) => {
  const { children, variant, ...rest } = props;
  return (
    <button {...rest} className={`button ${variant}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
