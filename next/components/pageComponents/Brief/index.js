import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useModal } from 'hooks/useModal';
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
import FormikTextField from 'components/common/Form/Input';
import { FileSvg } from 'constants/svg';
import { CloseButton, PrimaryButton } from 'components/common/Buttons';
import SERVICE_API from 'api';
import Link from 'next/link';
import FormikPhoneField from 'components/common/Form/InputPhone';
import ModalSuccess from 'components/common/ModalSuccess';
import style from './index.module.scss';

const Brief = () => {
  const router = useRouter();
  const { showModal, hideModal } = useModal();
  const [file, setFile] = useState('');

  const showSuccessModal = () => {
    showModal(ModalSuccess, { showModal, hideModal });
  };

  const selectFile = (path) => {
    setFile(path);
  };

  const initialValues = {
    services: [],
    title: '',
    functional: '',
    deadline: [],
    budget: [],
    userName: '',
    phone: '',
    email: '',
    file: ''
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('files', file);
    const res = await SERVICE_API.EntitiesApi.uploadFile(formData);
    const fileUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${res.data[0].url}`;
    return fileUrl;
  };

  const onSubmit = async (values, formik) => {
    const allAnswers = { ...values };
    allAnswers.budget = allAnswers.budget.join(', ');
    allAnswers.deadline = allAnswers.deadline.join(', ');
    allAnswers.services = allAnswers.services.join(', ');
    let fileUrl = '';
    if (file) {
      fileUrl = await uploadFile();
      allAnswers.file = fileUrl;
    }
    console.log(allAnswers);
    formik.resetForm();
    showSuccessModal();
    const res = await SERVICE_API.EntitiesApi.addBrief(allAnswers);
    // console.log(res);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.heading}>
          <CloseButton onClick={() => router.push('/')} customClassName={style.heading__close} />
          <h1 className={style.heading__title}>????????</h1>
          <div className={style.heading__desc}>
            <p className={style.heading__desc__left}>
              ?????????? ?????????????? ???????????? ???????????? ???????????????? ????&nbsp;??????????????, ?????????????? ???????????????? ????????????????????
              ?????????????? ???????????? ??????????????.
            </p>
            <p className={style.heading__desc__right}>
              ?????? ?????????????? ?????????????? ???????????????????? ??????&nbsp;???????????????????? ?????????????? ?????????? ???????????????????? ????????????
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
                  <h3 className={style.section__title}>???????????????????????? ????????????</h3>
                  <TagList name="services" tags={servicesCollection} values={values} />
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>
                    ???????????????? ??&nbsp;?????????? ???????????????????????? ????????????????
                  </h3>
                  <FormikTextAreaField
                    customClassName={style.form__input__textarea}
                    name="title"
                    placeholder="????????????????"
                  />
                </div>

                <div className={clsx(style.section, style.functional__section)}>
                  <h3 className={style.section__title}>
                    ?????????????? ???????????????? ?????????? ??&nbsp;?????????????????????? ??????????????
                  </h3>
                  <div className={style.functional}>
                    <div className={style.functional__input}>
                      <FormikTextAreaField
                        customClassName={style.form__input__textarea}
                        name="functional"
                        placeholder="????????????????"
                      />
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
                  <h3 className={style.section__title}>???????????????? ??????????</h3>
                  <TagList
                    onlyOne={true}
                    name="deadline"
                    tags={deadlineCollection}
                    values={values}
                  />
                </div>

                <div className={style.section}>
                  <h3 className={style.section__title}>?????????? ??????????????</h3>
                  <TagList onlyOne={true} name="budget" tags={budgetCollection} values={values} />
                </div>

                <div className={clsx(style.section, style.contacts)}>
                  <h3 className={style.section__title}>????????????????</h3>
                  <div className={style.contacts__input__wrapper}>
                    <FormikTextField
                      customClassName={clsx(style.contacts__input, errors?.userName && style.error)}
                      type="text"
                      name="userName"
                      placeholder="????????"
                      label="?????? ?????? ??????????"
                    />
                  </div>
                  <div className={style.contacts__input__wrapper}>
                    <FormikPhoneField
                      customClassName={clsx(style.contacts__input, errors?.phone && style.error)}
                      type="phone"
                      name="phone"
                      placeholder="+7 (903) 370-55-77"
                      label="?????????? ????????????????"
                    />
                  </div>
                  <div className={style.contacts__input__wrapper}>
                    <FormikTextField
                      customClassName={clsx(style.contacts__input, errors?.email && style.error)}
                      type="text"
                      name="email"
                      placeholder="E-mail"
                      label="E-mail"
                    />
                  </div>

                  <div className={style.contacts__input__wrapper}>
                    <FormikTextField
                      selectFile={selectFile}
                      customClassName={style.contacts__input__file}
                      type="file"
                      name="file"
                      id="file"
                      label="???????????????????? ??????????"
                    />
                    <label className={style.contacts__fake} htmlFor="file">
                      {file ? (
                        <p className={style.file__name}>{file.name}</p>
                      ) : (
                        <>
                          <FileSvg /> <p>??????????????????</p>
                        </>
                      )}
                    </label>
                  </div>

                  <PrimaryButton customClassName={style.btn__submit} type="submit">
                    O????????????????
                  </PrimaryButton>
                </div>
                <div className={style.politics}>
                  ?????????????? ????&nbsp;????????????, ????&nbsp;?????????? ???????????????? ????&nbsp;?????????????????? ????????????????????????
                  ???????????? ??&nbsp;????????????????????????&nbsp;
                  <Link href={`https://new.progressapp.ru/static/privacy.pdf`}>
                    <a className={style.politics__link} target="blank">
                      ??&nbsp;?????????????????? ????????????????????????????????????.
                    </a>
                  </Link>
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
