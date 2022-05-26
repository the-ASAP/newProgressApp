import React from 'react';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import { PrimaryButton } from 'components/common/Buttons';
import style from './index.module.scss';

const MarqueeSection = ({ children, ...props }) => {
  const router = useRouter();
  return (
    <div className={style.marquee}>
      <Marquee gradient={false} {...props}>
        <PrimaryButton
          customClassName={style.marquee__button}
          onClick={() => router.push('/brief')}
        >
          Бриф
        </PrimaryButton>
        <span className={style.marquee__text}>Progress app закажи свой MVP</span>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
