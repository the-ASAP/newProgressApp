import Image from 'next/image';
import React, { useState } from 'react';
import clsx from 'clsx';
import avatar from 'public/msg_avatar.png';
import { TriangleSVG } from 'constants/svg';
import ChatForm from '../ChatForm/ChatForm';
import { chatQuestions } from 'constants/data';
import ManagerInfo from '../ManagerInfo';

import style from './index.module.scss';

const ChatMobile = ({ director }) => {
  const [step, setStep] = useState(1);
  const [currentTag, setCurrentTag] = useState(null);

  const selectTag = (tag) => {
    setCurrentTag(tag);
  };

  return (
    <div className={style.chat_mobile__container}>
      <div className={style.stepper}>
        {step === 1 && (
          <>
            <div className={clsx(style.manager, director && style.manager__dir)}>
              <ManagerInfo director={director} />
              <div
                className={clsx(style.message__wrapper, director && style.message__wrapper__dir)}
              >
                <div className={clsx(style.message, director && style.message__dir)}>
                  {chatQuestions[0].question}
                </div>
                <div
                  className={clsx(
                    style.message__triangle,
                    director && style.message__triangle__dir
                  )}
                >
                  <TriangleSVG />
                </div>
              </div>
            </div>

            <div className={style.tags}>
              {chatQuestions[0].tags.map((tag, ind) => {
                return (
                  <button
                    onClick={() => selectTag(tag.title)}
                    key={ind}
                    className={clsx(
                      style.tag,
                      director && style.tag__dir,
                      currentTag === tag.title && style.active
                    )}
                  >
                    {tag.title}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className={style.form}>
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatMobile;
