import React, { useEffect, useState } from 'react';
import Message from '../Message/Message';
import { fakeMessages } from 'constants/data';
import avatar from 'public/msg_avatar.png';
import style from './index.module.scss';
import ChatForm from '../ChatForm/ChatForm';
import Image from 'next/image';

const ChatDesktop = () => {
  const [answers, setAnswers] = useState([]);
  const [isFakeTyping, setIFakeTyping] = useState(false);
  const [currentFakeIndex, setCurrentFakeIndex] = useState(0);
  const [allMessages, setAllMessages] = useState([]);

  const saveAnswer = (customerMsgText) => {
    setAllMessages([
      ...allMessages,
      { messageText: customerMsgText, avatar: '/no_avatar.png', isCustomer: true }
    ]);

    if (currentFakeIndex !== fakeMessages.length - 1) {
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
    setIFakeTyping(true);

    const timer = setTimeout(() => {
      setIFakeTyping(false);
      setAllMessages([...allMessages, fakeMessages[currentFakeIndex]]);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentFakeIndex]);

  return (
    <>
      <div className={style.messages}>
        {allMessages.map((msg, index) => {
          return <Message key={index} data={msg} />;
        })}
      </div>

      {isFakeTyping && (
        <div className={style.typing__wrapper}>
          <div className={style.typing__avatar}>
            <Image alt="avatar" src={avatar} layout="fill" />
          </div>
          <>
            <div className={style.loading__bar}></div>
            <div className={style.loading__bar}></div>
            <div className={style.loading__bar}></div>
          </>
        </div>
      )}

      <div>
        <ChatForm handleSubmit={saveAnswer} disabled={isFakeTyping} />
      </div>
    </>
  );
};

export default ChatDesktop;
