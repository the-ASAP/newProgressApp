import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import { fakeMessages } from 'constants/data';
import style from './index.module.scss';
import ChatForm from '../ChatForm/ChatForm';
import SERVICE_API from 'api';

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

  const handleSubmit = async () => {
    const allAnswers = {};
    allAnswers.serviceName = Object.values(answers[0])[0];
    allAnswers.phoneNumber = Object.values(answers[1])[0];
    const res = await SERVICE_API.EntitiesApi.addSmallChatApplication(allAnswers);
    // console.log(res);
  };

  useEffect(() => {
    if (answers.length === fakeMessages.length - 1) {
      //  отправка на сервер
      handleSubmit();
    }
  }, [answers]);

  useEffect(() => {
    setAllMessages([...allMessages, fakeMessages[currentFakeIndex]]);
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
