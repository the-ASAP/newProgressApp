import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

import style from './message.module.scss';
import { TriangleSVG } from 'constants/svg';
import Link from 'next/link';

const Message = ({ data }) => {
  const { isCustomer, messageText, avatar, link } = data;

  return (
    <div className={style.message__wrapper}>
      <div className={clsx(style.avatar, isCustomer ? style.avatar__right : style.avatar__left)}>
        <Image alt="avatar" src={avatar} layout="fill" objectFit="cover" />
      </div>
      <div className={style.text}>
        <div className={style.text__inner}>
          {messageText}{' '}
          {link && (
            <Link href={`https://progressapp.ru/static/privacy.pdf`}>
              <a className={style.message__link} target="blank">
                {link.text}{' '}
              </a>
            </Link>
          )}
        </div>

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
