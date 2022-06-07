import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import talentImg1 from 'public/talent_1.png';
import talentImg2 from 'public/talent_2.png';
import talentImg3 from 'public/talent_3.png';
import talentImg4 from 'public/talent_4.png';
import talentImg5 from 'public/talent_5.png';
import talentImg6 from 'public/talent_6.png';
import circleImg from 'public/circle.png';
import style from './index.module.scss';

const TalentsSection = () => {
  return (
    <div className={clsx(style.container, 'wrapper')}>
      <div className={style.back}>
        <Image layout="fill" src={circleImg} alt="main" priority="true" />
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
          <Image alt="talent" layout="fill" src={talentImg1} />
        </div>
        <div className={style.talents__talent2}>
          <Image alt="talent" layout="fill" src={talentImg2} />
        </div>
        <div className={style.talents__talent3}>
          <Image alt="talent" layout="fill" src={talentImg3} />
        </div>
        <div className={style.talents__talent4}>
          <Image alt="talent" layout="fill" src={talentImg4} />
        </div>
        <div className={style.talents__talent5}>
          <Image alt="talent" layout="fill" src={talentImg5} />
        </div>
        <div className={style.talents__talent6}>
          <Image alt="talent" layout="fill" src={talentImg6} />
        </div>
      </div>
    </div>
  );
};

export default TalentsSection;
