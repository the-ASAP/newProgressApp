import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.scss';

const ModalChat = () => {
  return ReactDOM.createPortal(
    <div className={style.modalChat}>

    </div>,
    document.getElementById('modal-root')
  );
}

export default ModalChat;
