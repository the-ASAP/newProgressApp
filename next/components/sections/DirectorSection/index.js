import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import style from './index.module.scss';
import directorImg from 'public/director.png';
import { address, directorMail, facebook, instagram, mail, phone } from 'constants/contacts';
import Switch from 'components/common/Switch';

import directorBackImg from 'public/director__back2.png';
const DirectorSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  const selectMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.container__back, darkMode && style.container__back__dark)}>
        <Image layout="fill" src={directorBackImg} />
      </div>
      <div className={'wrapper'}>
        <div className={style.director}>
          <span className={clsx(style.director__title, darkMode && style.director__title__dark)}>
            <span className={clsx(style.director__title, style.director__title_green)}>
              Всегда на связи,{' '}
            </span>
            готовы обсудить ваш проект уже сегодня
            <Switch
              customClassName={'directorSection'}
              onSelectMode={selectMode}
              darkMode={darkMode}
            />
          </span>
          <div className={style.director__content}>
            <div className={style.director__block}>
              <div className={style.director__image}>
                <Image alt="director" layout="fill" src={directorImg} />
              </div>
              <span className={clsx(style.director__name, darkMode && style.director__name__dark)}>
                Даниил Васильев
              </span>
              <span
                className={clsx(
                  style.director__position,
                  darkMode && style.director__position__dark
                )}
              >
                директор и менеджер проектов
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
                  href={facebook}
                  className={clsx(style.director__social, darkMode && style.director__social__dark)}
                >
                  Facebook
                </a>
                <a
                  href={instagram}
                  className={clsx(style.director__social, darkMode && style.director__social__dark)}
                >
                  Instagram
                </a>
              </div>
              <span
                className={clsx(style.director__address, darkMode && style.director__address__dark)}
              >
                {address}
              </span>
            </div>
            <div className={style.director__chat}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorSection;
