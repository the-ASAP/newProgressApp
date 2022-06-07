import FormikTextField from 'components/common/Form/Input';
import { PrimaryButton } from 'components/common/Buttons';
import React from 'react';

import { ArrowRight } from 'constants/svg';
import { FormContainer } from 'components/common/Form/FormContainer';
import style from './index.module.scss';

const ChatForm = ({ handleSubmit, disabled }) => {
  const initialValues = {
    message: ''
  };

  const onSubmit = (values, { resetForm }) => {
    if (!values.message) return;

    handleSubmit(values.message);
    resetForm();
  };

  return (
    <>
      <FormContainer initialValues={initialValues} onSubmit={onSubmit}>
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
