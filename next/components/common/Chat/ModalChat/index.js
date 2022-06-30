import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import ModalBackdrop from 'components/common/ModalBackdrop';
import { CloseButton } from '../../Buttons';
import ChatMobile from '../ChatMobile';
import ChatDesktop from './../ChatDesktop';
import style from './index.module.scss';

const ModalChat = ({ hideModal }) => {
  const { isTablet } = useWindowDimensions();

  return (
    <ModalBackdrop hideModal={hideModal} customClassName={'backdrop__green'}>
      <div className={style.chat}>
        <div className={style.chat__cover_green}>
          <div className={style.chat__cover_gradient}>
            <CloseButton onClick={hideModal} customClassName={style.close__chat__btn} />

            {isTablet ? <ChatDesktop /> : <ChatMobile />}
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
};

export default ModalChat;
