import React from 'react';
import Collapsible from 'react-collapsible';
import { menuList } from 'constants/data';
import clsx from 'clsx';
import styles from './index.module.scss';

const MobileAccordion = () => {
  return (
    <div className={styles.menu__accordions}>
      {!!menuList.length &&
        menuList?.map((item) => (
          <Collapsible
            trigger={item.title}
            key={item.id}
            className={styles.accordion}
            openedClassName={styles.accordion}
            triggerClassName={styles.accordion__trigger}
            triggerOpenedClassName={clsx(styles.accordion__trigger, styles.accordion__trigger_open)}
            contentInnerClassName={styles.accordion__content}
          >
            <ul>
              {!!item?.categories?.length &&
                item?.categories.map((subItem) => (
                  <li className={styles.accordion__subitem} key={item.id}>
                    <a href="#">{subItem.title}</a>
                  </li>
                ))}
            </ul>
          </Collapsible>
        ))}
    </div>
  );
};

export default MobileAccordion;
