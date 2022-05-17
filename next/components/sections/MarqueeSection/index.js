import React from 'react';
import Marquee from 'react-fast-marquee';
import PrimaryButton from 'components/common/Buttons/PrimaryButton';
import style from './index.module.scss';

const MarqueeSection = ({ children, ...props }) => {
  return (
    <div className={style.marquee}>
      <Marquee gradient={false} {...props}>
        <PrimaryButton customClassName={style.marquee__button}>Бриф</PrimaryButton>
        <span className={style.marquee__text}>Progress app закажи свой MVP</span>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
