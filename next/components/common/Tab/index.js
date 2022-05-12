import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

const Tab = ({ customClassName, children, ...props }) => (
  <button type="button" className={clsx(styles.tab, customClassName)} {...props}>
    {children}
  </button>
);

export default Tab;
