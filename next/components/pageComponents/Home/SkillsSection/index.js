import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import skillImg1 from 'public/skill_1.png';
import skillImg2 from 'public/skill_2.png';
import skillImg3 from 'public/skill_3.png';
import Skill from 'components/mainComponents/Skill';
import SkillMain from 'components/mainComponents/SkillMain';
import { skillTeam } from 'constants/data';
import style from './index.module.scss';

const SkillsSection = () => {
  return (
    <div className={clsx(style.skills, 'wrapper')}>
      <span className={style.skills__mainText}>
        <span className={style.skills__mainText_mainColor}>Наши преимущества</span> основанные
        на&nbsp;опыте и&nbsp;экспертности команды
      </span>
      <div className={style.skills__content}>
        <Skill
          title={`Кроссплатформенная и\u00A0нативная разработка`}
          text={`Независимые приложения с\u00A0высокой скоростью отклика\u00A0или разработка под\u00A0любую операционную систему с\u00A0единой кодовой базой`}
        >
          <div className={style.skills__imageIphone}>
            <Image alt="skill" layout="fill" src={skillImg1} />
          </div>
        </Skill>
        <Skill
          title={'Широкий технологический стек'}
          text={
            'Пишем на\u00A016 языках программирования, разрабатываем на\u00A09 фреймворках, 5\u00A0библиотек, используем базы данных, модули. Выстраиваем архитектуру проекта'
          }
          reverseOrientation={true}
        >
          <div className={style.skills__imageLogo}>
            <Image alt="skill" layout="fill" src={skillImg2} objectFit="cover" />
          </div>
        </Skill>
        <SkillMain
          title={'Сильный UI/UX по\u00A0дизайн системам'}
          text={
            'Продумываем весь путь пользователя от\u00A0начальных экранов знакомств. Адаптируем фирменный стиль заказчика к\u00A0гайдланйнам платформ'
          }
          imageSrc={'/skill_main.png'}
        />
        <Skill
          title={'Внешние и внутренние интеграции'}
          text={`Двух, трехсторонние интеграции ваших продуктов с\u00A0сервисами по\u00A0API, доработки проектов на\u00A0уровне кода с\u00A0возможностью техподдержки`}
        >
          <div className={style.skills__spiderweb}>
            <Image
              alt="skill"
              layout="fill"
              objectFit="contain"
              objectPosition="center bottom"
              src={skillImg3}
            />
          </div>
        </Skill>

        <Skill
          reverseOrientation
          title={'Только собственные команды'}
          text={
            'Считаем, что\u00A0обеспечить лучший проектный результат можно развивая экосистему внутри компании, с\u00A0поэтапным контролем над\u00A0процессами'
          }
        >
          <div className={style.skills__team}>
            {skillTeam?.map((person) => (
              <div className={style.person} key={person}>
                <Image layout="fill" src={person} alt="photo" />
              </div>
            ))}
          </div>
        </Skill>
      </div>
    </div>
  );
};

export default SkillsSection;
