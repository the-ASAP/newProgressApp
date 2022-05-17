import React from 'react';

import style from './index.module.scss';
import ModalBackdrop from 'components/common/ModalBackdrop';
import CloseButton from 'components/common/Buttons/CloseButton';

const ModalForm = ({ hideModal }) => {
  return (
    <ModalBackdrop hideModal={hideModal}>
      <div className={style.form}>
        <CloseButton onClick={hideModal} customClassName={'close__form__btn'} />
        <span className={style.form__title}>Заявка на вакансию</span>
      </div>
    </ModalBackdrop>
  );
};

export default ModalForm;
