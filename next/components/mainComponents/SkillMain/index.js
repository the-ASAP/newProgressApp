import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import style from './index.module.scss';

const SkillMain = ({ title, text, imageSrc }) => {
  return (
    <div className={style.skillMain}>
      <div className={style.skillMain__content}>
        <span className={style.skillMain__title}>{title}</span>
        <div className={clsx(style.skillMain__border, style.skillMain__border_black)}></div>
        <span className={style.skillMain__text}>{text}</span>
      </div>
      {imageSrc && (
        <div className={style.skillMain__image}>
          <Image alt="skillMain" layout="fill" src={imageSrc} />
        </div>
      )}
    </div>
  );
};

export default SkillMain;
