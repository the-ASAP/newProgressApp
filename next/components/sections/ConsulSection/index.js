import React from 'react'
import clsx from 'clsx'
import Collapsible from 'react-collapsible';
import { accordios } from 'constants/data';
import style from './index.module.scss'

const ConsulSection = () => {
  return (
    <div className={clsx(style.consul, 'wrapper')}>
      <span className={style.consul__mainText}>
        <span className={style.consul__mainText_mainColor}>Консультируем</span>по техническим вопросам
      </span>
      <div className={style.consul__accordions}>
        {accordios?.map(accordion =>
          <Collapsible
            trigger={accordion.title}
            key={accordion.id}
            className={style.accordion}
            openedClassName={style.accordion}
            triggerClassName={style.accordion__trigger}
            triggerOpenedClassName={clsx(style.accordion__trigger, style.accordion__trigger_open)}
            contentInnerClassName={style.accordion__content}
          >
            <p className={style.accordion__text}>
              {accordion.text}
            </p>
          </Collapsible>
        )}
      </div>
    </div>
  )
}

export default ConsulSection
