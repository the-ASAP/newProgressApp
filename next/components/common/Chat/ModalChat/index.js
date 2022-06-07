import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import ModalBackdrop from 'components/common/ModalBackdrop';
import { CloseButton } from '../../Buttons';
import ChatMobile from '../ChatMobile';
import ChatDesktop from './../ChatDesktop';
import style from './index.module.scss';

const ModalChat = ({ hideModal }) => {
  const windowWidth = useWindowDimensions();

  return (
    <ModalBackdrop hideModal={hideModal} customClassName={'backdrop__green'}>
      <div className={style.chat}>
        <CloseButton onClick={hideModal} customClassName={style.close__chat__btn} />

        {windowWidth > 738 ? <ChatDesktop /> : <ChatMobile />}
      </div>
    </ModalBackdrop>
  );
};

export default ModalChat;
