import React from 'react';
import Select from 'react-select';
import { useFormikContext, useField } from 'formik';
import style from './index.module.scss';

const FormikSelect = (props) => {
  const {
    label = '',
    name = '',
    type = 'select',
    disabled = false,
    onChange,
    optionList,
    ...other
  } = props;
  const form = useFormikContext();

  const handleChange = (e) => {
    form.setFieldValue(name, e.value);
    if (onChange) onChange(e);
  };

  const options = optionList.map((el) => {
    return { value: el, label: el };
  });

  const customStyles = {
    control: () => ({
      height: '3.125rem',
      display: 'flex',
      borderRadius: '0.625rem',
      border: '1px solid #e4e4e4'
    })
  };

  return (
    <>
      {label && (
        <label htmlFor={name} className={style.label}>
          {label}
        </label>
      )}

      <Select
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
        options={options}
        onChange={handleChange}
        placeholder={optionList[0]}
      />
    </>
  );
};

export default FormikSelect;
