import React from 'react';

import { messages } from 'constants/data';
import style from './index.module.scss';
import ModalBackdrop from 'components/common/ModalBackdrop';
import CloseButton from '../CloseButton';
import Message from '../Chat/Message/Message';
import ChatForm from '../Chat/ChatForm/ChatForm';

const ModalChat = ({ hideModal }) => {
  return (
    <ModalBackdrop hideModal={hideModal} customClassName={'backdrop__green'}>
      <div className={style.chat}>
        <CloseButton onClick={hideModal} customClassName={'closeChatBtn'} />

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
      </div>
    </ModalBackdrop>
  );
};

export default ModalChat;
