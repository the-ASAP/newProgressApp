import React from 'react'
import clsx from 'clsx'
import style from './index.module.scss'

const SkillsSection = () => {
  return (
    <div className={clsx(style.skills, 'wrapper')}>
      <span className={style.skills__mainText}>
        <span className={style.skills__mainText_mainColor}>Наши преимущества</span> основаные на опыте и экспертности команды 
      </span>
      <div className={style.skills__content}>
        <div className={style.mainBlock}>
          <div className={style.mainBlock__content}>
            <span className={style.mainBlock__title}>
              Кроссплатформенная и нативная разработка
            </span>
            <div className={style.mainBlock__greenBorder}></div>
            <span className={style.mainBlock__text}>
              Независмые приложения с высокой скоростью отклика или разработка под любую операционную систему с единой кодовой базой
            </span>
          </div>
        </div>
        <div className={style.mainBlock}>
          <div className={style.mainBlock__content}>
            <span className={style.mainBlock__title}>
              Широкий технологический стек
            </span>
            <div className={style.mainBlock__greenBorder}></div>
            <span className={style.mainBlock__text}>
              Пишем на 16 языках программирования, разработываем на 9 фреймворках, 5 библиотек, используем базы данных, модули. Выстраиваем архитектуру проекта
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection