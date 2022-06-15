import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import talentImg1 from 'public/svg/talent_1.svg';
import talentImg2 from 'public/talent_2.png';
import talentImg3 from 'public/talent_3.png';
import talentImg4 from 'public/talent_4.png';
import talentImg5 from 'public/talent_5.png';
import talentImg6 from 'public/talent_6.png';
import circleImg from 'public/circle.png';
import style from './index.module.scss';
import { useModal } from 'hooks/useModal';
import ModalForm from 'components/common/ModalForm';

const TalentsSection = () => {
  const { showModal, hideModal } = useModal();

  const showVacancyForm = () => {
    showModal(ModalForm, { showModal, hideModal });
  };
  return (
    <div className={clsx(style.container, 'wrapper')}>
      <div className={style.back}>
        <span className={style.back__image}>
          <Image src={circleImg} alt="main" width={1000} height={1000} />
        </span>
      </div>

      <div className={style.talents}>
        <span className={style.talents__title}>Ищем таланты в&nbsp;команду</span>
        <span className={style.talents__text}>
          Всегда находимся в&nbsp;поиске крутых специалистов. Все актуальные вакансии в&nbsp;нашем
          HH. Если нет подходящих, то&nbsp;пиши на&nbsp;почту
        </span>
        <button onClick={showVacancyForm} type="button" className={style.talents__vacancy}>
          Все вакансии
        </button>
        <div className={style.talents__talent1}>
          <Image alt="talent" src={talentImg1} layout="fill" objectFit="cover" />
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
