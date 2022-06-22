import React, { useState } from 'react';
import Link from 'next/link';
import { mail } from 'constants/contacts';
import { menuList } from 'constants/data';
import { AsapSVG, LogoDarkSVG } from 'constants/svg';
import Collapsible from 'react-collapsible';
import clsx from 'clsx';

import style from './index.module.scss';

const Footer = () => {
  const [menuSubcategories, setMenuSubcategories] = useState(menuList[0]?.categories);

  return (
    <div className={style.container}>
      <div className={style.footer}>
        <div className={style.wrapper}>
          <div className={style.footer__logo}>
            <Link href="/">
              <a>
                <LogoDarkSVG />
              </a>
            </Link>
          </div>
          <a href={`mailTo:${mail}`} className={style.footer__mail}>
            {mail}
          </a>

          <div className={style.footer__content}>
            <div className={style.footer__menu}>
              {menuList?.map((menuItem) => (
                <button
                  type="button"
                  className={style.footer__menuItem}
                  key={menuItem?.id}
                  onClick={() => setMenuSubcategories(menuItem.categories)}
                >
                  {menuItem?.title}
                </button>
              ))}
            </div>
            <div className={style.footer__border}></div>
            <div className={style.footer__submenu}>
              {!!menuSubcategories.length &&
                menuSubcategories.map((item) => (
                  <Link href={item?.href} key={item?.id}>
                    <a className={style.footer__menuSubitem}>{item?.title}</a>
                  </Link>
                ))}
            </div>
          </div>

          <div className={style.menu__accordions}>
            {!!menuList.length &&
              menuList?.map((item) => (
                <Collapsible
                  trigger={item.title}
                  key={item.id}
                  className={style.accordion}
                  openedClassName={style.accordion}
                  triggerClassName={style.accordion__trigger}
                  triggerOpenedClassName={clsx(
                    style.accordion__trigger,
                    style.accordion__trigger_open
                  )}
                  contentInnerClassName={style.accordion__content}
                >
                  <ul>
                    {!!item?.categories?.length &&
                      item?.categories.map((subItem) => (
                        <li className={style.accordion__subitem} key={subItem.id}>
                          <a href="#">{subItem.title}</a>
                        </li>
                      ))}
                  </ul>
                </Collapsible>
              ))}
          </div>

          <div className={style.license}>
            <span className={style.license__law}>
              {' '}
              <span>Progress app 2022. </span>Все права защищены&nbsp;©
            </span>
            <div className={style.license__content}>
              <a className={style.license__politics}>Политика конфиденциальности</a>
              <Link href={'https://asap-ag.ru/'}>
                <a target="blank">
                  <AsapSVG />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
