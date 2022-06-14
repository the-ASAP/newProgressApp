import { PrimaryButton } from 'components/common/Buttons';
import { FormContainer } from 'components/common/Form/FormContainer';
import FormikTextField from 'components/common/Form/Input';
import clsx from 'clsx';
import React from 'react';
import style from './index.module.scss';
import { ChatContactValidationSchema } from 'utils/validations';

const ContactForm = ({ handleSubmit }) => {
  const initialValues = {
    userName: '',
    companyName: '',
    phone: '',
    email: ''
  };

  const onSubmit = (values) => {
    handleSubmit(values);
  };
  return (
    <>
      <FormContainer
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ChatContactValidationSchema}
        validateOnChange={false}
      >
        {(formik) => {
          const { isValid, errors, values } = formik;
          return (
            <div className={style.input__list}>
              <div className={style.input__wrapper}>
                <FormikTextField
                  customClassName={clsx(style.input, errors?.companyName && style.error)}
                  type="text"
                  name="companyName"
                  placeholder="Название компании"
                  label="Название компании"
                />
              </div>

              <div className={style.input__wrapper}>
                <FormikTextField
                  customClassName={clsx(style.input, errors?.userName && style.error)}
                  type="text"
                  name="userName"
                  placeholder="Иван"
                  label="Ваше имя"
                />
              </div>

              <div className={style.input__wrapper}>
                <FormikTextField
                  customClassName={clsx(style.input, errors?.phone && style.error)}
                  type="text"
                  name="phone"
                  placeholder="+7 950 450-95-22"
                  label="Номер телефона "
                />
              </div>

              <div className={style.input__wrapper}>
                <FormikTextField
                  customClassName={clsx(style.input, errors?.email && style.error)}
                  type="text"
                  name="email"
                  placeholder="Иван@mail.ru"
                  label="Email"
                />
              </div>

              <PrimaryButton customClassName={style.btn__submit} type="submit">
                Oтправить
              </PrimaryButton>
            </div>
          );
        }}
      </FormContainer>
    </>
  );
};

export default ContactForm;
