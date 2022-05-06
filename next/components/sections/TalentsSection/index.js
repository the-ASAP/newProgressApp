import React from 'react';
import clsx from 'clsx';
import style from './index.module.scss';
import Image from 'next/image';

const TalentsSection = () => {
  return (
    <div className={clsx(style.container, 'wrapper')}>
      <div className={style.back}>
        <Image layout="fill" src="/circle.png" alt="main" priority="true" />
      </div>

      <div className={style.talents}>
        <span className={style.talents__title}>Ищем таланты в команду</span>
        <span className={style.talents__text}>
          Всегда находимся в поиске крутых специалистов. Все актуальные вакансии в нашем HH. Если
          нет подходящих, то пиши на почту
        </span>
        <button type="button" className={style.talents__vacancy}>
          Все вакансии
        </button>
        <div className={style.talents__talent1}>
          <Image alt="talent" layout="fill" src="/talent_1.png" />
        </div>
        <div className={style.talents__talent2}>
          <Image alt="talent" layout="fill" src="/talent_2.png" />
        </div>
        <div className={style.talents__talent3}>
          <Image alt="talent" layout="fill" src="/talent_3.png" />
        </div>
        <div className={style.talents__talent4}>
          <Image alt="talent" layout="fill" src="/talent_4.png" />
        </div>
        <div className={style.talents__talent5}>
          <Image alt="talent" layout="fill" src="/talent_5.png" />
        </div>
        <div className={style.talents__talent6}>
          <Image alt="talent" layout="fill" src="/talent_6.png" />
        </div>
      </div>
    </div>
  );
};

export default TalentsSection;
