import React from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const AllWidthButton = ({ customClassName, children, ...props }) => {
  return (
    <button type="button" className={clsx(style.allWidthButton, customClassName)} {...props}>
      {children}
    </button>
  );
};

export default AllWidthButton;
