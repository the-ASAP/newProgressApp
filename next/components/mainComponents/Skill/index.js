import React from 'react'
import clsx from 'clsx'
import style from './index.module.scss'

const Skill = ({children, title, text, reverseOrientation}) => {
  return (
    <div className={style.skill}>
      <div className={style.skill__content}>
        <span className={style.skill__title}>
          {title}
        </span>
        <div className={clsx(style.skill__border, style.skill__border_green)}></div>
        <span className={style.skill__text}>
          {text}
        </span>
      </div>
      <div className={clsx(style.skill__imageContent, reverseOrientation && style.skill__imageContent_top)}>
        {children}
      </div>
    </div>
  )
}

export default Skill