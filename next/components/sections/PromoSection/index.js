import React, { useEffect } from 'react';
import Image from 'next/image';
import PrimatyButton from 'components/common/PrimatyButton';
import Tab from 'components/common/Tab';
import { ChatSVG, ReactSVG, PlusSVG } from 'constants/svg';
import { promoTeam, activity } from 'constants/data';
import { useModal } from 'hooks/useModal';
import ReactDOM from 'react-dom'

import styles from './index.module.scss';
import ModalChat from 'components/common/ModalChat';
import { useClient } from 'hooks/useClient';

const PromoSection = () => {
  const client = useClient()
  // const { createModal } = useModal()

  // useEffect(() => {
  //   createModal('modalChat')
  // }, [])
  return (
    <>
      {client && <ModalChat />}
      <div className={styles.back}>
        <Image
          layout='fill'
          src='/main.png'
          alt='main'
          priority='true'
        />
      </div>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.intro}>
            <h1 className={styles.intro__title}>
              Проектирование и разработка
            </h1>
            <PrimatyButton>
              <ChatSVG />
            </PrimatyButton>
          </div>
          <div className={styles.middle}>
            <h3 className={styles.middle__title}>
              программного обеспечения и мобильных приложений
            </h3>
            <div className={styles.middle__frame}>
              <ReactSVG />
            </div>
          </div>
          <div className={styles.outro}>
            <div className={styles.outro__frame}>
              <div className={styles.outro__frame_wrap}>
                <Image
                  layout='fill'
                  src='/svelte.png'
                  alt='framework'
                />
              </div>
            </div>
            <span className={styles.outro__text}>
              Программирование, дизайн и аналитика — дело нашей жизни. Наши клиенты — лучшие эксперты в своих отраслях. Мы - единая команда с общей целью. Мы делаем проекты, которыми гордимся. Вместе.
            </span>
            <div className={styles.outro__team}>
              {promoTeam?.map(person => (
                <div className={styles.person} key={person}>
                  <Image
                    layout='fill'
                    src={person}
                    alt="photo"
                  />
                </div>
              ))}
              <PrimatyButton customClassName={styles.person_plus}>
                <PlusSVG />
              </PrimatyButton>
            </div>
          </div>

        </div>
        <div className={styles.activities}>
          {activity.map(activity => (
            <div className={styles.activity} key={activity.title}>
              <div>
                <h3 className={styles.activity__title}>{activity.title}</h3>
                <div className={styles.activity__categories}>
                  {!!activity?.categories?.length && activity.categories.map(category => (
                    <span className={styles.activity__category} key={category}>{category}</span>
                  ))}
                </div>
              </div>
              <div className={styles.activity__tabs}>
                {!!activity?.tabs?.length && activity.tabs.map(tab => (
                  <Tab key={tab} customClassName={styles.activity__customTab}>{tab}</Tab>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PromoSection