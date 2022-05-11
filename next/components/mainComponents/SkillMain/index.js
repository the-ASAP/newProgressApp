import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import style from './index.module.scss';

const SkillMain = ({ title, text, imageSrc }) => {
  return (
    <div className={style.skill__main}>
      <div className={style.skill__main__content}>
        <span className={style.skill__main__title}>{title}</span>
        <div className={clsx(style.skill__main__border, style.skill__main__border_black)}></div>
        <span className={style.skill__main__text}>{text}</span>
      </div>
      {imageSrc && (
        <div className={style.skill__main__image}>
          <Image alt="skillMain" layout="fill" src={imageSrc} />
        </div>
      )}
    </div>
  );
};

export default SkillMain;
