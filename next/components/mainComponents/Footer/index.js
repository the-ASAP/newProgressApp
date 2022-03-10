import React, { useState } from 'react';
import Link from 'next/link';
import { mail } from 'constants/contacts';
import { footerMenu } from 'constants/data';
import { AsapSVG } from 'constants/svg';

import style from './index.module.scss';

const Footer = () => {
  const [menuSubcategories, setMenuSubcategories] = useState(footerMenu[0]?.categories)

  return (
    <div className={style.footer}>
      <a href={`mailTo:${mail}`} className={style.footer__mail}>{mail}</a>
      <div className={style.footer__content}>
        <div className={style.footer__menu}>
          {!!footerMenu.length && footerMenu.map(menuItem =>
            <button
              type="button"
              className={style.footer__menuItem}
              key={menuItem?.id}
              onClick={() => setMenuSubcategories(menuItem.categories)}
            >
              {menuItem?.title}
            </button>
          )}
        </div>
        <div className={style.footer__border}></div>
        <div className={style.footer__submenu}>
          {!!menuSubcategories.length && menuSubcategories.map(item =>
            <Link href={item?.href} key={item?.id}>
              <a className={style.footer__menuSubitem}>{item?.title}</a>
            </Link>
          )}
        </div>
      </div>
      <div className={style.license}>
        <span className={style.license__law}>Progress app 2021. Все права защишены ©</span>
        <div className={style.license__content}>
          <button className={style.license__politics}>Политика конвиденциальности</button>
          <Link href={""}>
            <a><AsapSVG /></a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
