import React from 'react';
import { useFormikContext, useField } from 'formik';
import clsx from 'clsx';
import InputMask from 'react-input-mask';
import style from './index.module.scss';

const FormikPhoneField = (props) => {
  const {
    label = '',
    name = '',
    type = 'tel',
    disabled = false,
    onChange,
    customClassName,
    customLabelStyle,
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
        <label htmlFor={name} className={clsx(style.label, customLabelStyle)}>
          {label}
        </label>
      )}

      <InputMask
        className={clsx(style.input, customClassName)}
        {...evalProps}
        mask="+7 999 999 99 99"
        alwaysShowMask={false}
      />
    </>
  );
};

export default FormikPhoneField;
