import React, { useState, useEffect } from 'react';
import style from './index.module.scss';

const ModalWrapper = ({ show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false)

  return (
    <div className={style.modalWrapper}>
      {children}
    </div>
  );
}

export default ModalWrapper;
