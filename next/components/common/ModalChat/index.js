import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { messages } from 'constants/data';
import ModalBackdrop from 'components/common/ModalBackdrop';
import { CloseButton } from '../Buttons';
import Message from '../Chat/Message/Message';
import ChatForm from '../Chat/ChatForm/ChatForm';
import style from './index.module.scss';
import ChatMobile from '../Chat/ChatMobile';

const ModalChat = ({ hideModal }) => {
  const windowWidth = useWindowDimensions();

  return (
    <ModalBackdrop hideModal={hideModal} customClassName={'backdrop__green'}>
      <div className={style.chat}>
        <CloseButton onClick={hideModal} customClassName={style.close__chat__btn} />

        {windowWidth > 738 ? (
          <>
            <div className={style.messages}>
              <Message
                messageText={messages[0].messageText}
                avatar={messages[0].avatar}
                isCustomer={messages[0].isCustomer}
              />

              <Message
                messageText={messages[1].messageText}
                avatar={messages[1].avatar}
                isCustomer={messages[1].isCustomer}
              />
            </div>

            <div>
              <ChatForm />
            </div>
          </>
        ) : (
          <ChatMobile />
        )}
      </div>
    </ModalBackdrop>
  );
};

export default ModalChat;
