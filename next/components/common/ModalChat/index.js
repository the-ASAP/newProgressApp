import React from 'react';
import ModalBackdrop from 'components/common/ModalBackdrop';
import style from './index.module.scss';

const ModalChat = ({hideModal}) => {
  return (
    <ModalBackdrop hideModal={hideModal}>
      <div className={style.chat}>

      </div>
    </ModalBackdrop>
  );
}

export default ModalChat;
