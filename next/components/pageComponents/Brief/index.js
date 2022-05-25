import React from 'react';
import { FormContainer } from 'components/common/Form/FormContainer';
import FormikTextAreaField from 'components/common/Form/TextArea';
import { servicesCollection } from 'constants/data';
import { BriefValidationSchema } from 'utils/validations';
import style from './index.module.scss';
import TagList from './TagList';

const Brief = () => {
  const initialValues = {
    services: ['mobile_app', 'mvp', 'erp-system'],
    title: '',
    functional: ''
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.heading}>
          <h1 className={style.heading__title}>Бриф</h1>
          <div className={style.heading__desc}>
            <p className={style.heading__desc__left}>
              Перед началом работы просим ответить на вопросы, которые детально сформируют предмет
              первой встречи.
            </p>
            <p className={style.heading__desc__right}>
              Это поможет собрать информацию для подготовки решения вашей конкретной задачи
            </p>
          </div>
        </div>

        <FormContainer
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={BriefValidationSchema}
          validateOnChange={false}
        >
          {(formik) => {
            const { isValid, errors, values } = formik;
            return (
              <div className={style.form__wrapper}>
                <div className={style.section}>
                  <h3 className={style.section__title}>Интересующая услуга</h3>
                  <TagList tags={servicesCollection} values={values} />
                  <span className={style.error}>{errors?.services && errors.services}</span>
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>Название и сфера деятельности компании</h3>
                  <FormikTextAreaField
                    type="textarea"
                    customClassName={style.form__input__textarea}
                    name="title"
                    placeholder="Описание"
                  />
                  <span className={style.error}>{errors?.title && errors.title}</span>
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>
                    Краткое описание задач и функционала проекта
                  </h3>
                  <div className={style.section__row}>
                    <div className={style.section__row__left}>
                      <FormikTextAreaField
                        type="textarea"
                        customClassName={style.form__input__textarea}
                        name="functional"
                        placeholder="Описание"
                      />
                      <span className={style.error}>{errors?.functional && errors.functional}</span>
                    </div>
                  </div>
                </div>

                <button className={style.btn__submit} type="submit">
                  отправить
                </button>
              </div>
            );
          }}
        </FormContainer>
      </div>
    </div>
  );
};

export default Brief;
