import React from 'react';
import { FormContainer } from 'components/common/Form/FormContainer';
import FormikTextAreaField from 'components/common/Form/TextArea';
import {
  servicesCollection,
  deadlineCollection,
  budgetCollection,
  functionalDesc
} from 'constants/data';
import { BriefValidationSchema } from 'utils/validations';
import clsx from 'clsx';
import TagList from './TagList';
import Collapsible from 'react-collapsible';

import style from './index.module.scss';
import FormikTextField from 'components/common/Form/Input';

const Brief = () => {
  const initialValues = {
    services: ['mobile_app', 'mvp', 'erp-system'],
    title: '',
    functional: '',
    deadline: ['three_months'],
    budget: ['500_thousand']
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
                  <TagList name="services" tags={servicesCollection} values={values} />
                  <span className={style.error}>{errors?.services && errors.services}</span>
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>Название и сфера деятельности компании</h3>
                  <FormikTextAreaField
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
                  <div className={style.functional}>
                    <div className={style.functional__input}>
                      <FormikTextAreaField
                        customClassName={style.form__input__textarea}
                        name="functional"
                        placeholder="Описание"
                      />
                      <span className={style.error}>{errors?.functional && errors.functional}</span>
                    </div>
                    <div className={style.functional__accordions}>
                      {!!functionalDesc.length &&
                        functionalDesc?.map((item) => {
                          return (
                            <Collapsible
                              trigger={item.title}
                              key={item.id}
                              className={style.accordion}
                              openedClassName={style.accordion}
                              triggerClassName={style.accordion__trigger}
                              triggerOpenedClassName={clsx(
                                style.accordion__trigger,
                                style.accordion__trigger_open
                              )}
                              contentInnerClassName={style.accordion__content}
                            >
                              <p>{item.desc}</p>
                            </Collapsible>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>Желаемые сроки</h3>
                  <TagList
                    onlyOne={true}
                    name="deadline"
                    tags={deadlineCollection}
                    values={values}
                  />
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>Рамки бюджета</h3>
                  <TagList onlyOne={true} name="budget" tags={budgetCollection} values={values} />
                </div>

                <div className={clsx(style.section, style.contacts)}>
                  <h3 className={style.section__title}>Контакты</h3>
                  <div className={style.contacts__input__wrapper}>
                    <FormikTextField
                      customClassName={style.contacts__input}
                      type="text"
                      name="userName"
                      placeholder="Иван"
                      label="Как вас зовут"
                    />
                  </div>
                  <div className={style.contacts__input__wrapper}>
                    <FormikTextField
                      customClassName={style.contacts__input}
                      type="phone"
                      name="phone"
                      placeholder="8 (903) 370-55-77"
                      label="Номер телефона"
                    />
                  </div>
                  <div className={style.contacts__input__wrapper}>
                    <FormikTextField
                      customClassName={style.contacts__input}
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      label="E-mail"
                    />
                  </div>

                  <div className={style.contacts__input__wrapper}>
                    <div>
                      <FormikTextField
                        customClassName={style.contacts__input__file}
                        type="file"
                        name="file"
                        label="Прикрепите файлы"
                      />
                      <span>Загрузить</span>
                    </div>
                  </div>

                  <button className={style.btn__submit} type="submit">
                    отправить
                  </button>
                </div>
              </div>
            );
          }}
        </FormContainer>
      </div>
    </div>
  );
};

export default Brief;
