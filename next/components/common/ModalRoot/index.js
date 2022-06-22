import React from 'react';
import { useModal } from 'hooks/useModal';
import { useEffect } from 'react';

const ModalRoot = () => {
  const { Modal, modalProps, showModal, hideModal } = useModal();

  useEffect(() => {
    if (Modal) {
      document.body.style.overflowY = 'hidden';
      document.querySelector('html').style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.querySelector('html').style.overflowY = 'auto';
    }
  }, [Modal]);

  return Modal ? <Modal {...modalProps} showModal={showModal} hideModal={hideModal} /> : null;
};

export default ModalRoot;
