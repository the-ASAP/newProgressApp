import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoSVG } from 'constants/svg';
import imageMainLogo from 'public/svg/main_logo_light.svg';
import { menu } from 'constants/data';
import { mail } from 'constants/contacts';
import MobileMenu from 'components/common/MobileMenu';
import { PrimaryButton } from 'components/common/Buttons';

import styles from './index.module.scss';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = (isVisible) => {
    setMobileMenuVisible(isVisible);
  };

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
    return () => document.body.classList.remove('lock');
  }, [mobileMenuVisible]);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.header__logo}>
            <Image alt="logo" layout="fill" src={imageMainLogo} />
          </div>
        </a>
      </Link>
      <menu className={styles.menu}>
        {!!menu?.length &&
          menu?.map((menuItem) => (
            <Link href={menuItem.link} key={menuItem.title}>
              <a className={styles.menu__link}>{menuItem.title}</a>
            </Link>
          ))}
      </menu>
      <a href={`mailto:${mail}`} className={styles.mail}>
        hello@progressapp.ru
      </a>
      <PrimaryButton customClassName={styles.burger__button} onClick={() => toggleMobileMenu(true)}>
        <span></span>
      </PrimaryButton>
      <MobileMenu toggleMobileMenu={toggleMobileMenu} visible={mobileMenuVisible} />
    </header>
  );
};

export default Header;
