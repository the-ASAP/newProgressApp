import React from 'react';

import style from './index.module.scss';
import ModalBackdrop from 'components/common/ModalBackdrop';
import CloseButton from '../CloseButton';

const ModalChat = ({ hideModal }) => {
  return (
    <ModalBackdrop hideModal={hideModal} customClassName={'backdrop__green'}>
      <div className={style.chat}>
        <CloseButton onClick={hideModal} customClassName={'closeChatBtn'} />
      </div>
    </ModalBackdrop>
  );
};

export default ModalChat;
