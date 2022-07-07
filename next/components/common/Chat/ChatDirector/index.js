import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { TriangleSVG } from 'constants/svg';
import ChatForm from '../ChatForm/ChatForm';
import { chatQuestions } from 'constants/data';
import avatar from 'public/msg_avatar.png';

import style from './index.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import ContactForm from '../ContactForm';
import Link from 'next/link';
import { changeFormatLargeChat } from 'utils/format';
import SERVICE_API from 'api';

const ChatDirector = ({ darkMode }) => {
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [currentTag, setCurrentTag] = useState(null);
  const [answers, setAnswers] = useState([]);

  // console.log(answers);
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  const selectTag = (tag) => {
    setCurrentTag(tag);
  };

  const doNextStep = (answer) => {
    const curQuestion = chatQuestions[step].question;

    setAnswers([...answers, { question: [curQuestion], answer: [answer] }]);
    setStep((prev) => prev + 1);
    setCurrentTag(null);
  };

  const sendData = async (contactData) => {
    const curQuestion = chatQuestions[step].question;
    setAnswers([
      ...answers,
      { question: [curQuestion], answer: [Object.values(contactData).join(', ')] }
    ]);

    // отправка на сервер в нужном формате answers + contactData
    const allAnswers = changeFormatLargeChat(answers, contactData);
    console.log(allAnswers);
    const res = await SERVICE_API.EntitiesApi.addLargeChatApplication(allAnswers);
    console.log(res);
    setStep((prev) => prev + 1);
  };

  return (
    <div className={style.chat__container}>
      <div className={style.chat__inner} ref={containerRef}>
        {answers.length > 0 &&
          answers.map((item, ind) => {
            return (
              <div key={ind} className={style.conversation}>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {item.question}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
                    </div>
                  </div>
                </div>

                <div className={style.conversation__answer}>{item.answer}</div>
              </div>
            );
          })}

        <div className={style.stepper}>
          <div className={style.step__one}>
            {step === 0 && (
              // вопрос 1
              <>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {chatQuestions[0].question}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
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
                          darkMode && style.tag__dark,
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

          <div className={style.step__two}>
            {step === 1 && (
              // вопрос 2
              <>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {chatQuestions[1].question}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
                    </div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[1].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(
                          style.tag,
                          darkMode && style.tag__dark,
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

          <div className={style.step__three}>
            {step === 2 && (
              // вопрос 3
              <>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {chatQuestions[2].question}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
                    </div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[2].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(
                          style.tag,
                          darkMode && style.tag__dark,
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

          <div className={style.step__four}>
            {step === 3 && (
              // вопрос 4
              <>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {chatQuestions[3].question}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
                    </div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[3].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(
                          style.tag,
                          darkMode && style.tag__dark,
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

          <div className={style.step__five}>
            {step === 4 && (
              // вопрос 5
              <>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {chatQuestions[4].question}{' '}
                      {chatQuestions[4].link && (
                        <Link href={`https://new.progressapp.ru/static/privacy.pdf`}>
                          <a
                            target="blank"
                            className={clsx(
                              style.message__link,
                              darkMode && style.message__link__dark
                            )}
                          >
                            {chatQuestions[4].link.text}
                          </a>
                        </Link>
                      )}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
                    </div>
                  </div>
                </div>
                <ContactForm handleSubmit={sendData} isDirectorMode={true} darkMode={darkMode} />
              </>
            )}
          </div>

          <div className={style.step__five}>
            {step === 5 && (
              // финальный месседж
              <>
                <div className={style.manager}>
                  <div className={style.manager__img}>
                    <Image alt="avatar" src={avatar} layout="fill" />
                  </div>
                  <div className={style.message__wrapper}>
                    <div className={clsx(style.message, darkMode && style.message__dark)}>
                      {chatQuestions[5].question}
                    </div>
                    <div className={style.message__triangle}>
                      <TriangleSVG color={darkMode ? '#3f4644' : '#FCFDFF'} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {step < 4 && (
          <div className={style.form}>
            <ChatForm value={currentTag} handleSubmit={doNextStep} darkMode={darkMode} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDirector;
