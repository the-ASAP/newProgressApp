import FormikTextField from 'components/common/Form/Inputs';
import { PrimaryButton } from 'components/common/Buttons';
import React from 'react';

import { ArrowRight } from 'constants/svg';
import { FormContainer } from 'components/common/Form/FormContainer';
import style from './index.module.scss';

const ChatForm = () => {
  const initialValues = {
    message: ''
  };

  const onSubmit = (values) => {
    if (!values.message) return;
    console.log(values);
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

            <PrimaryButton customClassName={style.form__button} type="submit" disabled={!isValid}>
              <ArrowRight />
            </PrimaryButton>
          </div>
        )}
      </FormContainer>
    </>
  );
};

export default ChatForm;
