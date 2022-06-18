import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import avatar from 'public/msg_avatar3.png';
import style from './index.module.scss';

const ManagerInfo = () => {
  return (
    <div className={style.manager__box}>
      <div className={style.manager__img}>
        <Image alt="avatar" src={avatar} layout="fill" />
      </div>
      <div className={style.manager__info}>
        <p className={style.manager__info__name}>Яна Никитина</p>
        <p className={style.manager__info__rang}>менеджер проектов</p>
      </div>
    </div>
  );
};

export default ManagerInfo;
