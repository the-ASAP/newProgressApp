import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import ChatForm from '../ChatForm/ChatForm';
import { chatQuestions } from 'constants/data';
import ManagerInfo from '../ManagerInfo';
import ContactForm from '../ContactForm';
import Link from 'next/link';
import style from './index.module.scss';

const ChatMobile = () => {
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [currentTag, setCurrentTag] = useState(null);
  const [answers, setAnswers] = useState([]);

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

  const sendData = (contactData) => {
    const curQuestion = chatQuestions[step].question;
    setAnswers([
      ...answers,
      { question: [curQuestion], answer: [Object.values(contactData).join(', ')] }
    ]);

    // отправка на сервер в нужном формате answers + contactData
    // console.log(answers, contactData);
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
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>{item.question}</div>
                  </div>
                </div>
                <button type="button" className={style.conversation__answer}>
                  {item.answer}
                </button>
              </div>
            );
          })}

        <div className={style.stepper}>
          <div className={style.step__one}>
            {step === 0 && (
              // вопрос 1
              <>
                <div className={style.manager}>
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>{chatQuestions[0].question}</div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[0].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(style.tag, currentTag === tag.title && style.active)}
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
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>{chatQuestions[1].question}</div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[1].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(style.tag, currentTag === tag.title && style.active)}
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
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>{chatQuestions[2].question}</div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[2].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(style.tag, currentTag === tag.title && style.active)}
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
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>{chatQuestions[3].question}</div>
                  </div>
                </div>

                <div className={style.tags}>
                  {chatQuestions[3].tags.map((tag, ind) => {
                    return (
                      <button
                        onClick={() => selectTag(tag.title)}
                        key={ind}
                        className={clsx(style.tag, currentTag === tag.title && style.active)}
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
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>
                      {chatQuestions[4].question}{' '}
                      {chatQuestions[4].link && (
                        <Link href={chatQuestions[4].link.url}>
                          <a className={style.message__link}>{chatQuestions[4].link.text}</a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <ContactForm handleSubmit={sendData} />
              </>
            )}
          </div>

          <div className={style.step__five}>
            {step === 5 && (
              // финальный месседж
              <>
                <div className={style.manager}>
                  <ManagerInfo />
                  <div className={style.message__wrapper}>
                    <div className={style.message}>{chatQuestions[5].question}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {step < 4 && (
          <div className={style.form}>
            <ChatForm value={currentTag} handleSubmit={doNextStep} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMobile;
