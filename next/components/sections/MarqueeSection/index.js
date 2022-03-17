import React from 'react'
import Marquee from "react-fast-marquee";
import PrimatyButton from 'components/common/PrimatyButton';
import style from './index.module.scss'

const MarqueeSection = ({children, ...props}) => {
  return (
    <div className={style.marquee}>
      <Marquee
        gradient={false}
        {...props}
      >
        <PrimatyButton customClassName={style.marquee__button}>Бриф</PrimatyButton>
        <span className={style.marquee__text}>Progress app закажи свой MVP</span>
      </Marquee>
    </div>
  )
}

export default MarqueeSection