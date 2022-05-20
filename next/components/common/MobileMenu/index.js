import React from 'react';
import imageMainLogo from 'public/main_logo.png';
import clsx from 'clsx';
import Image from 'next/image';
import CloseButton from '../Buttons/CloseButton';
import styles from './index.module.scss';

const MobileMenu = ({ toggleMobileMenu, visible }) => {
  return (
    <div className={clsx(styles.menu__container, visible && styles.menu__container__active)}>
      <div className={styles.menu__heading}>
        <div className={styles.logo}>
          <Image alt="logo" layout="fill" src={imageMainLogo} />
        </div>
        <CloseButton onClick={() => toggleMobileMenu(false)} />
      </div>
    </div>
  );
};

export default MobileMenu;
