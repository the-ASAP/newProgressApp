import { PrimaryButton } from 'components/common/Buttons';
import { FormContainer } from 'components/common/Form/FormContainer';
import FormikTextField from 'components/common/Form/Input';
import clsx from 'clsx';
import React from 'react';
import { ChatContactValidationSchema } from 'utils/validations';
import FormikPhoneField from 'components/common/Form/InputPhone';
import style from './index.module.scss';

const ContactForm = ({ handleSubmit, isMobileMode, isDirectorMode, darkMode }) => {
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
                  customLabelStyle={darkMode && style.label__dark}
                  customClassName={clsx(
                    style.input,
                    darkMode && style.dark,
                    errors?.companyName && style.error
                  )}
                  type="text"
                  name="companyName"
                  placeholder="Название компании"
                  label="Название компании"
                />
              </div>

              <div className={style.input__wrapper}>
                <FormikTextField
                  customLabelStyle={darkMode && style.label__dark}
                  customClassName={clsx(
                    style.input,
                    darkMode && style.dark,
                    errors?.userName && style.error
                  )}
                  type="text"
                  name="userName"
                  placeholder="Иван"
                  label="Ваше имя"
                />
              </div>

              <div className={style.input__wrapper}>
                <FormikPhoneField
                  customLabelStyle={darkMode && style.label__dark}
                  customClassName={clsx(
                    style.input,
                    darkMode && style.dark,
                    errors?.phone && style.error
                  )}
                  type="tel"
                  name="phone"
                  placeholder="+7 950 450-95-22"
                  label="Номер телефона "
                />
              </div>

              <div className={style.input__wrapper}>
                <FormikTextField
                  customLabelStyle={darkMode && style.label__dark}
                  customClassName={clsx(
                    style.input,
                    darkMode && style.dark,
                    errors?.email && style.error
                  )}
                  type="text"
                  name="email"
                  placeholder="Иван@mail.ru"
                  label="Email"
                />
              </div>

              <PrimaryButton
                customClassName={clsx(
                  style.btn__submit,
                  isMobileMode && style.white,
                  isDirectorMode && style.green
                )}
                type="submit"
              >
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
