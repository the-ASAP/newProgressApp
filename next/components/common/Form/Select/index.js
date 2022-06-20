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
    customClassName,
    optionList,
    ...other
  } = props;
  // const [field] = useField(name);
  const form = useFormikContext();

  const handleChange = (e) => {
    form.setFieldValue(name, e.value);
    if (onChange) onChange(e);
  };

  const options = optionList.map((el) => {
    return { value: el, label: el };
  });

  return (
    <>
      {label && (
        <label htmlFor={name} className={style.label}>
          {label}
        </label>
      )}

      <Select
        components={{ IndicatorSeparator: () => null }}
        options={options}
        onChange={handleChange}
        placeholder={optionList[0]}
        className={style.input__select}
      />
    </>
  );
};

export default FormikSelect;
