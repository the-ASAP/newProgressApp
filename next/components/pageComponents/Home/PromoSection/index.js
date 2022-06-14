import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { PrimaryButton } from 'components/common/Buttons';
import Tab from 'components/common/Tab';
import { ChatSVG, ReactSVG, PlusSVG } from 'constants/svg';
import { promoTeam, activity } from 'constants/data';
import mainImg from 'public/main.png';
import svelteImg from 'public/svelte.png';
import reactImg from 'public/react.png';
import ModalChat from 'components/common/Chat/ModalChat';
import ModalForm from 'components/common/ModalForm';
import { useScroll } from 'hooks/useScroll';
import { useModal } from 'hooks/useModal';
import styles from './index.module.scss';

const PromoSection = () => {
  const { showModal, hideModal } = useModal();
  const { scrollY, scrollYBottom } = useScroll();

  const showChat = () => {
    showModal(ModalChat, { showModal, hideModal });
  };

  const showVacancyForm = () => {
    showModal(ModalForm, { showModal, hideModal });
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.back}>
          <Image
            layout="fill"
            src={mainImg}
            alt="main"
            priority="true"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="wrapper">
          <div className={styles.intro}>
            <h1 className={styles.intro__title}>Проектирование и разработка</h1>

            <PrimaryButton
              onClick={showChat}
              customClassName={clsx(
                styles.button__top,
                scrollY > 35 && styles.button__bottom,
                scrollYBottom < 1450 && styles.button__none
              )}
            >
              <ChatSVG />
            </PrimaryButton>

            <PrimaryButton onClick={showChat} customClassName={styles.button__mobile}>
              <ChatSVG />
            </PrimaryButton>
          </div>
          <div className={styles.middle}>
            <h3 className={styles.middle__title}>
              программного обеспечения и&nbsp;мобильных приложений
            </h3>
            <div className={styles.middle__frame}>
              <Image layout="fill" src={reactImg} alt="framework" />
            </div>
          </div>
          <div className={styles.outro}>
            <div className={styles.outro__frame}>
              <Image layout="fill" src={svelteImg} alt="framework" />
            </div>
            <span className={styles.outro__text}>
              Программирование, дизайн и аналитика — дело нашей жизни. Наши клиенты — лучшие
              эксперты в своих отраслях. Мы - единая команда с общей целью. Мы делаем проекты,
              которыми гордимся. Вместе.
            </span>
            <div className={styles.outro__team}>
              {promoTeam?.map((person) => (
                <div className={styles.person} key={person}>
                  <Image layout="fill" src={person} alt="photo" />
                </div>
              ))}
              <PrimaryButton onClick={showVacancyForm} customClassName={styles.person_plus}>
                <PlusSVG />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.activities}>
        {activity.map((activity) => (
          <div className={styles.activity} key={activity.title}>
            <span className={styles.activity__cover}></span>
            <div>
              <h3 className={styles.activity__title}>{activity.title}</h3>
              <div className={styles.activity__categories}>
                {!!activity?.categories?.length &&
                  activity.categories.map((category) => (
                    <span className={styles.activity__category} key={category}>
                      {category}
                    </span>
                  ))}
              </div>
            </div>
            <div className={styles.activity__tabs}>
              {!!activity?.tabs?.length &&
                activity.tabs.map((tab) => (
                  <Tab key={tab} customClassName={styles.activity__customTab}>
                    {tab}
                  </Tab>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
