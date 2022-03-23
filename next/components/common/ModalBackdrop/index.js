import React from 'react';
import style from './index.module.scss';

const ModalBackdrop = ({ children, hideModal }) => {
  const hideAllModal = (e) => {
    if(e.target.id === 'ModalBackdrop') hideModal()
  }

  return (
    <div className={style.backdrop} onClick={hideAllModal} id="ModalBackdrop">
      {children}
    </div>
  );
}

export default ModalBackdrop;
