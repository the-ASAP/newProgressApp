import FormikTextField from 'components/common/Form/Inputs';
import PrimaryButton from 'components/common/PrimatyButton';
import { Form, Formik } from 'formik';
import React from 'react';
import clsx from 'clsx';

import style from './index.module.scss';

const ChatForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
        <Form>
          <div className={style.form__wrapper}>
            <FormikTextField customClassName={'form__input'} name="message" />
            <PrimaryButton customClassName={'form__button'} type="submit">
              send
            </PrimaryButton>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ChatForm;
