import React from 'react'
import Link from 'next/link'
import { LogoSVG } from 'constants/svg'
import { menu } from 'constants/data'
import { mail } from 'constants/contacts'

import styles from './index.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <a>
        <LogoSVG />
      </a>
    </Link>
    <menu className={styles.menu}>
      {!!menu?.length && menu?.map(menuItem =>
        <Link href={menuItem.link} key={menuItem.title}>
          <a className={styles.menu__link}>{menuItem.title}</a>
        </Link>
      )}
    </menu>
    <a href={`mailto:${mail}`} className={styles.mail}>hello@progressapp.ru</a>
  </header>
)


export default Header