import React, { useState } from 'react';
import Link from 'next/link';
import { LogoSVG } from 'constants/svg';
import { menu } from 'constants/data';
import { mail } from 'constants/contacts';
import MobileMenu from 'components/common/MobileMenu';
import { PrimaryButton } from 'components/common/Buttons';

import styles from './index.module.scss';

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = (isVisible) => {
    setMobileMenuVisible(isVisible);

    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <LogoSVG />
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
