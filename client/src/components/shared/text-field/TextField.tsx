import React from 'react';
import { useField } from 'formik';

import './text-field.scss';

const TextField: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { type, name } = props;
  const createInputField = (fieldType: string) => {
    switch (fieldType) {
      case 'message':
        return <textarea className={(meta.touched && meta.error && 'text-field__input-error') || null} {...field} {...props} id={name} />;
      default:
        return <input className={(meta.touched && meta.error && 'text-field__input-error') || null} {...field} {...props} id={name} />;
    }
  };
  return (
    <div className="text-field">
      <div className="text-field__input">
        {createInputField(type)}
        <label htmlFor={name}>
          {label}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-field__error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextField;
