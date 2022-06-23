import React from 'react';
import { useModal } from 'hooks/useModal';
import { useEffect } from 'react';

const ModalRoot = () => {
  const { Modal, modalProps, showModal, hideModal } = useModal();

  useEffect(() => {
    if (Modal) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }, [Modal]);

  return Modal ? <Modal {...modalProps} showModal={showModal} hideModal={hideModal} /> : null;
};

export default ModalRoot;
