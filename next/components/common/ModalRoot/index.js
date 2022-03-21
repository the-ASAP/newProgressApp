import React from 'react';
import { useModal } from 'hooks/useModal';

const ModalRoot = () => {
  const { Modal, modalProps, showModal, hideModal} = useModal()
  return Modal ? (
    <Modal
      {...modalProps}
      showModal={showModal}
      hideModal={hideModal}
    />
  ) : null
}

export default ModalRoot;
