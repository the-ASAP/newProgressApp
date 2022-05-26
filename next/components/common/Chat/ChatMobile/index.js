import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import avatar from 'public/msg_avatar.png';
import { TriangleSVG } from 'constants/svg';

import style from './index.module.scss';
import ChatForm from '../ChatForm/ChatForm';

const tags = [
  { id: 1, title: 'Web приложение' },
  { id: 2, title: 'Мобильное приложение' },
  { id: 3, title: 'Аутсорс' },
  { id: 4, title: 'Доработка' }
];

const ChatMobile = ({ director }) => {
  return (
    <div className={style.chat_mobile__container}>
      <div className={clsx(style.manager, director && style.manager__dir)}>
        <div className={style.manager__box}>
          <div className={style.manager__img}>
            <Image alt="avatar" src={avatar} layout="fill" />
          </div>
          <div className={clsx(style.manager__info, director && style.manager__info__dir)}>
            <p className={style.manager__info__name}>Яна Никитина</p>
            <p className={style.manager__info__rang}>менеджер проектов</p>
          </div>
        </div>
        <div className={clsx(style.message__wrapper, director && style.message__wrapper__dir)}>
          <div className={clsx(style.message, director && style.message__dir)}>
            Добрый день про какую услугу вы хотели бы узнать поподробнее?
          </div>
          <div className={clsx(style.message__triangle, director && style.message__triangle__dir)}>
            <TriangleSVG />
          </div>
        </div>
      </div>

      <div className={clsx(style.tags, director && style.tags__dir)}>
        {tags.map((tag) => {
          return (
            <button className={clsx(style.tag, director && style.tag__dir)} key={tag.id}>
              {tag.title}
            </button>
          );
        })}
      </div>

      <div className={style.form}>
        <ChatForm />
      </div>
    </div>
  );
};

export default ChatMobile;
