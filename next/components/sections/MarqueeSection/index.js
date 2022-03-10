import React from 'react'
import Marquee from "react-fast-marquee";
import GreenButton from 'components/common/GreenButton';
import style from './index.module.scss'

const MarqueeSection = ({children, ...props}) => {
  return (
    <div className={style.marquee}>
      <Marquee {...props}>
        <GreenButton customClassName={style.marquee__button}>Бриф</GreenButton>
        <span className={style.marquee__text}>Progress app закажи свой MVP</span>
      </Marquee>
    </div>
  )
}

export default MarqueeSection