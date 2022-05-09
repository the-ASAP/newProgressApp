import React from 'react';
import ModalBackdrop from 'components/common/ModalBackdrop';
import style from './index.module.scss';
import CloseButton from '../CloseButton';

const ModalForm = ({ hideModal }) => {
  return (
    <ModalBackdrop hideModal={hideModal}>
      <div className={style.form}>
        <CloseButton onClick={hideModal} customClassName={'closeFormBtn'} />
        <span className={style.form__title}>Заявка на вакансию</span>
      </div>
    </ModalBackdrop>
  );
};

export default ModalForm;
