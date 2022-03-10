import React from 'react'
import Skill from 'components/mainComponents/Skill'
import SkillMain from 'components/mainComponents/SkillMain'
import Image from 'next/image'

import clsx from 'clsx'
import style from './index.module.scss'

const SkillsSection = () => {
  return (
    <div className={clsx(style.skills, 'wrapper')}>
      <span className={style.skills__mainText}>
        <span className={style.skills__mainText_mainColor}>Наши преимущества</span> основаные на опыте и экспертности команды
      </span>
      <div className={style.skills__content}>
        <Skill
          title={"Кроссплатформенная и нативная разработка"}
          text={"Независмые приложения с высокой скоростью отклика или разработка под любую операционную систему с единой кодовой базой"}
        >
          <div className={style.skills__imageIphone}>
            <Image
              alt="skill"
              layout='fill'
              src={"/skill_1.png"}
            />
          </div>
        </Skill>
        <Skill
          title={"Широкий технологический стек"}
          text={"Пишем на 16 языках программирования, разработываем на 9 фреймворках, 5 библиотек, используем базы данных, модули. Выстраиваем архитектуру проекта"}
          reverseOrientation={true}
        >
          <div className={style.skills__imageLogo}>
            <Image
              alt="skill"
              layout='fill'
              src={"/skill_2.png"}
            />
          </div>
        </Skill>
        <SkillMain
          title={"Сильный UI/UX по дизайн системам"}
          text={"Продумываем весь путь пользователя от начальных экранов знакомств. Адаптируем фирменный стиль заказчика к гайдланйнам платформ"}
        />
        <Skill
          title={"Внешние и внутренние интеграции"}
          text={"Двух, трехсторонние интеграциии ваших продуктов с сервисами по API, доработки проектов на уровне кода с возможностью техподдержки"}
        />
        <Skill
          title={"Только собственные команды"}
          text={"Считаем, что обеспечить лучший проектный результат можно развивая экосистему внутри компании, с поэтапным контролем над процессами"}
        />
      </div>
    </div>
  )
}

export default SkillsSection