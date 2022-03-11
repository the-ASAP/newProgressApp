import React from 'react';
import clsx from 'clsx'
import style from './index.module.scss';
import Image from 'next/image';
import { address, directorMail, facebook, instagram, mail, phone } from 'constants/contacts';

const DirectorSection = () => {
  return (
    <div className={clsx(style.director, "wrapper")}>
      <span className={style.director__title}>
        <span className={clsx(style.director__title, style.director__title_green)}>Всегда на связи, </span>
        готовы обсудить ваш проект уже сегодня
      </span>
      <div className={style.director__content}>
        <div className={style.director__block}>
          <div className={style.director__image}>
            <Image
              alt='director'
              layout='fill'
              src="/director.png"
            />
          </div>
          <span className={style.director__name}>Даниил Васильев</span>
          <span className={style.director__position}>директор и менеджер проектов</span>
          <a href={`mailTo:${directorMail}`} className={style.director__directorMail}>Написать директору</a>
          <a href={`mailTo:${mail}`} className={style.director__mail}>hello@progressapp.ru</a>
          <a href={`tel:${phone}`} className={style.director__phone}>8 (8452) 531-888</a>
          <div className={style.director__socials}>
            <a href={facebook} className={style.director__social}>Facebook</a>
            <a href={instagram} className={style.director__social}>Instagram</a>
          </div>
          <span className={style.director__address}>{address}</span>
        </div>
        <div className={style.director__chat}>

        </div>
      </div>
    </div>
  );
}

export default DirectorSection;
