import FormikTextField from 'components/common/Form/Input';
import { PrimaryButton } from 'components/common/Buttons';
import clsx from 'clsx';
import React from 'react';

import { ArrowRight } from 'constants/svg';
import { FormContainer } from 'components/common/Form/FormContainer';
import style from './index.module.scss';

const ChatForm = ({ handleSubmit, disabled, value, darkMode }) => {
  const initialValues = {
    message: value || ''
  };

  const onSubmit = (values, formik) => {
    if (!values.message) return;

    handleSubmit(values.message);
    formik.resetForm();
  };

  return (
    <>
      <FormContainer initialValues={initialValues} onSubmit={onSubmit} enableReinitialize={true}>
        {({ isValid }) => (
          <div className={clsx(style.form__wrapper, darkMode && style.form__wrapper__dark)}>
            <FormikTextField
              customClassName={clsx(style.form__input, darkMode && style.form__input__dark)}
              name="message"
              placeholder="Напишите комментарий"
            />

            <PrimaryButton
              customClassName={style.form__button}
              type="submit"
              disabled={!isValid && disabled}
            >
              <ArrowRight />
            </PrimaryButton>
          </div>
        )}
      </FormContainer>
    </>
  );
};

export default ChatForm;
