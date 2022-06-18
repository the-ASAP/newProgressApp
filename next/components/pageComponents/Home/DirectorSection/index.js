import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import directorImg from 'public/director1.png';
import { address, directorMail, vk, telegram, mail, phone } from 'constants/contacts';
import Switch from 'components/common/Switch';
import directorBackImg from 'public/director__back2.png';
import ChatDirector from 'components/common/Chat/ChatDirector';
import style from './index.module.scss';

const DirectorSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  const selectMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={clsx(style.inner__back, darkMode && style.inner__back__dark)}>
          <Image layout="fill" src={directorBackImg} objectFit="contain" objectPosition="bottom" />
        </div>
        <div className={'wrapper'}>
          <div className={style.director}>
            <span className={clsx(style.director__title, darkMode && style.director__title__dark)}>
              <span className={clsx(style.director__title, style.director__title_green)}>
                Всегда на&nbsp;связи,{' '}
              </span>
              готовы обсудить ваш проект уже сегодня
              <span className={style.director__switch_wrap}>
                <Switch
                  customClassName={'directorSection'}
                  onSelectMode={selectMode}
                  darkMode={darkMode}
                />
              </span>
            </span>
            <div className={style.director__content}>
              <div className={style.director__block}>
                <div className={style.director__image}>
                  <Image alt="director" layout="fill" src={directorImg} objectFit="cover" />
                </div>
                <span
                  className={clsx(style.director__name, darkMode && style.director__name__dark)}
                >
                  Даниил Васильев
                </span>
                <span
                  className={clsx(
                    style.director__position,
                    darkMode && style.director__position__dark
                  )}
                >
                  директор и&nbsp;менеджер проектов
                </span>
                <a href={`mailTo:${directorMail}`} className={style.director__directorMail}>
                  Написать директору
                </a>
                <a
                  href={`mailTo:${mail}`}
                  className={clsx(style.director__mail, darkMode && style.director__mail__dark)}
                >
                  hello@progressapp.ru
                </a>
                <a
                  href={`tel:${phone}`}
                  className={clsx(style.director__phone, darkMode && style.director__phone__dark)}
                >
                  8 (8452) 531-888
                </a>
                <div className={style.director__socials}>
                  <a
                    href={vk}
                    target="blank"
                    className={clsx(
                      style.director__social,
                      darkMode && style.director__social__dark
                    )}
                  >
                    Вконтакте
                  </a>
                  <a
                    href={telegram}
                    target="blank"
                    className={clsx(
                      style.director__social,
                      darkMode && style.director__social__dark
                    )}
                  >
                    Telegram
                  </a>
                </div>
                <span
                  className={clsx(
                    style.director__address,
                    darkMode && style.director__address__dark
                  )}
                >
                  {address}
                </span>
              </div>
              <div className={clsx(style.director__chat, darkMode && style.director__chat__dark)}>
                <div className={style.director__chat__cover}></div>
                <ChatDirector darkMode={darkMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorSection;
