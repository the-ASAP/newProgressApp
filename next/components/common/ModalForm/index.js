import React from 'react';
import ModalBackdrop from 'components/common/ModalBackdrop';
import { CloseButton, PrimaryButton } from 'components/common/Buttons';
import { FormContainer } from '../Form/FormContainer';
import clsx from 'clsx';
import FormikTextField from '../Form/Input';
import { VacancyValidationSchema } from 'utils/validations';
import { FileSvg } from 'constants/svg';
import FormikSelect from '../Form/Select';
import { profession } from 'constants/data';
import style from './index.module.scss';
import { useState } from 'react';
import axios from 'axios';
import SERVICE_API from 'api';

const ModalForm = ({ hideModal }) => {
  const [fileName, setFileName] = useState('');
  const selectFileName = (path) => {
    setFileName(path);
  };

  const initialValues = {
    vacancy: profession[0],
    resumeUrl: '',
    userName: '',
    email: '',
    file: ''
  };

  const onSubmit = async (values) => {
    console.log(values);
    const res = await SERVICE_API.EntitiesApi.addJobApplication(values);
    console.log(res);
  };

  return (
    <ModalBackdrop hideModal={hideModal}>
      <div className={style.form}>
        <CloseButton onClick={hideModal} customClassName={style.close__form__btn} />
        <span className={style.form__title}>Заявка на вакансию</span>
        <FormContainer
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={VacancyValidationSchema}
          validateOnChange={false}
        >
          {(formik) => {
            const { isValid, errors, values } = formik;
            return (
              <div className={style.input__list}>
                <div className={style.input__wrapper}>
                  <FormikSelect
                    customLabelStyle={style.modal__label}
                    name="vacancy"
                    label="Какая вакансия вас интересует?"
                    optionList={profession}
                  />
                </div>

                <div className={style.input__wrapper}>
                  <FormikTextField
                    customLabelStyle={style.modal__label}
                    customClassName={clsx(style.input, errors?.resumeUrl && style.error)}
                    type="text"
                    name="resumeUrl"
                    placeholder="Адрес ссылки"
                    label="Ссылка на портфолио или резюме"
                  />
                </div>

                <div className={style.input__wrapper}>
                  <FormikTextField
                    customLabelStyle={style.modal__label}
                    customClassName={clsx(style.input, errors?.userName && style.error)}
                    type="text"
                    name="userName"
                    placeholder="Иван"
                    label="Ваше имя"
                  />
                </div>

                <div className={style.input__wrapper}>
                  <FormikTextField
                    customLabelStyle={style.modal__label}
                    customClassName={clsx(style.input, errors?.email && style.error)}
                    type="text"
                    name="email"
                    placeholder="Иван@mail.ru"
                    label="E-mail"
                  />
                </div>

                <div className={style.input__wrapper}>
                  <FormikTextField
                    customLabelStyle={style.modal__label}
                    selectFileName={selectFileName}
                    customClassName={style.input__file}
                    type="file"
                    name="file"
                    id="file"
                    label="Прикрепите файлы"
                  />
                  <label className={style.input__file__fake} htmlFor="file">
                    {fileName ? (
                      <p className={style.input__file__name}>{fileName}</p>
                    ) : (
                      <>
                        <FileSvg /> <p>Загрузить</p>
                      </>
                    )}
                  </label>
                </div>

                <PrimaryButton customClassName={style.btn__submit} type="submit">
                  Oтправить
                </PrimaryButton>
              </div>
            );
          }}
        </FormContainer>
      </div>
    </ModalBackdrop>
  );
};

export default ModalForm;
