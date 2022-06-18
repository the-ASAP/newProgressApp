import React, { useEffect } from 'react';
import Collapsible from 'react-collapsible';
import imageMainLogo from 'public/svg/main_logo_light.svg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { CloseButton } from '../Buttons';
import { menuList } from 'constants/data';
import { vk, telegram, mail, phone } from 'constants/contacts';
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

      <div className={styles.menu__accordions}>
        {!!menuList.length &&
          menuList?.map((item) => (
            <Collapsible
              trigger={item.title}
              key={item.id}
              className={styles.accordion}
              openedClassName={styles.accordion}
              triggerClassName={styles.accordion__trigger}
              triggerOpenedClassName={clsx(
                styles.accordion__trigger,
                styles.accordion__trigger_open
              )}
              contentInnerClassName={styles.accordion__content}
            >
              <ul>
                {!!item?.categories?.length &&
                  item?.categories.map((subItem) => (
                    <li className={styles.accordion__subitem} key={subItem.id}>
                      <a href="#">{subItem.title}</a>
                    </li>
                  ))}
              </ul>
            </Collapsible>
          ))}
      </div>

      <div className={styles.contacts}>
        <div className={styles.contacts__mail}>
          <a href={`mailTo:${mail}`}>{mail}</a>
        </div>
        <div className={styles.contacts__phone}>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className={styles.contacts__socials}>
          <a className={styles.contacts__social} href={vk} target="blank">
            Вконтакте
          </a>
          <a className={styles.contacts__social} href={telegram} target="blank">
            Telegram
          </a>
        </div>
      </div>

      <div className={styles.brif}>
        <Link href="/brief">
          <a>Заполнить бриф</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
