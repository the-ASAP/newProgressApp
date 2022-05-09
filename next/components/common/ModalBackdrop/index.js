import React from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const ModalBackdrop = ({ children, hideModal, customClassName }) => {
  const hideAllModal = (e) => {
    if (e.target.id === 'ModalBackdrop') hideModal();
  };

  return (
    <div
      className={clsx(style.backdrop, style[customClassName])}
      onClick={hideAllModal}
      id="ModalBackdrop"
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;
