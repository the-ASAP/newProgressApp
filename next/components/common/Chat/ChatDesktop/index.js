import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import { fakeMessages } from 'constants/data';
import style from './index.module.scss';
import ChatForm from '../ChatForm/ChatForm';

const ChatDesktop = () => {
  const [answers, setAnswers] = useState([]);
  const [currentFakeIndex, setCurrentFakeIndex] = useState(0);
  const [allMessages, setAllMessages] = useState([]);
  const isLastMessage = currentFakeIndex === fakeMessages.length - 1;

  const saveAnswer = (customerMsgText) => {
    setAllMessages([
      ...allMessages,
      { messageText: customerMsgText, avatar: '/no_avatar.png', isCustomer: true }
    ]);

    if (!isLastMessage) {
      setCurrentFakeIndex((prev) => prev + 1);
      const curQuestion = fakeMessages[currentFakeIndex].messageText;
      setAnswers([...answers, { [curQuestion]: customerMsgText }]);
    }
  };

  useEffect(() => {
    if (answers.length === 2) {
      //  отправка на сервер
      console.log(answers);
    }
  }, [answers]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllMessages([...allMessages, fakeMessages[currentFakeIndex]]);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [currentFakeIndex]);

  return (
    <div className={style.container}>
      <div className={style.messages}>
        {allMessages.map((msg, index) => {
          return <Message key={index} data={msg} />;
        })}
      </div>

      <>{!isLastMessage && <ChatForm handleSubmit={saveAnswer} />}</>
    </div>
  );
};

export default ChatDesktop;
