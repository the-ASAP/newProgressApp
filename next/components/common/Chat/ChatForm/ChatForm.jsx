import FormikTextField from 'components/common/Form/Input';
import { PrimaryButton } from 'components/common/Buttons';
import React, { useEffect } from 'react';

import { ArrowRight } from 'constants/svg';
import { FormContainer } from 'components/common/Form/FormContainer';
import style from './index.module.scss';

const ChatForm = ({ handleSubmit, disabled, value }) => {
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
          <div className={style.form__wrapper}>
            <FormikTextField
              customClassName={style.form__input}
              name="message"
              placeholder="Напишите ответ"
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
