import React from 'react';
import { useFormikContext, useField } from 'formik';
import clsx from 'clsx';
import style from './index.module.scss';

const FormikTextField = (props) => {
  const {
    label = '',
    name = '',
    type = 'text',
    disabled = false,
    onChange,
    customClassName,
    ...other
  } = props;
  const [field] = useField(name);
  const form = useFormikContext();

  const handleChange = (e) => {
    form.setFieldValue(name, e.target.value);
    if (onChange) onChange(e);
  };

  const inputValue = field.value || '';

  const evalProps = {
    ...field,
    ...other,
    value: inputValue,
    id: name,
    disabled,
    type,
    onChange: handleChange
  };

  return (
    <>
      {label && (
        <label htmlFor={name} className={style.label}>
          {label}
        </label>
      )}
      <input {...evalProps} className={clsx(style.input, customClassName)} />
    </>
  );
};

export default FormikTextField;
