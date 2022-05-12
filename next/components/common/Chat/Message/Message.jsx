import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import style from './message.module.scss';
import { TriangleSVG } from 'constants/svg';

const Message = ({ isCustomer, messageText, avatar }) => {
  return (
    <div className={style.message__wrapper}>
      <div className={clsx(style.avatar, isCustomer ? style.avatar__right : style.avatar__left)}>
        <Image alt="avatar" src={avatar} layout="fill" />
      </div>
      <div className={style.text}>
        <p>{messageText}</p>

        <div
          className={clsx(
            style.triangle,
            isCustomer ? style.triangle__right : style.triangle__left
          )}
        >
          <TriangleSVG />
        </div>
      </div>
    </div>
  );
};

export default Message;
