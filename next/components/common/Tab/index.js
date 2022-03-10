import React from 'react'
import clsx from 'clsx'
import styles from './index.module.scss'

const Tab = ({onClick, customClassName, children}) => (
  <button type="button" className={clsx(styles.tab, customClassName)}>{children}</button>
)

export default Tab