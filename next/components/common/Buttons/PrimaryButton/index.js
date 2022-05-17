import React from 'react';
import clsx from 'clsx';

import style from './index.module.scss';

const PrimaryButton = ({ customClassName, children, ...props }) => (
  <button type="button" className={clsx(style.main, customClassName)} {...props}>
    {children}
  </button>
);

export default PrimaryButton;
