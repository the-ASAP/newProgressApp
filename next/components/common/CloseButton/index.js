import React from 'react';
import clsx from 'clsx';

import style from './index.module.scss';

const CloseButton = ({ customClassName, ...props }) => {
  return (
    <button
      type="button"
      className={clsx(style.close__button, style[customClassName])}
      {...props}
    ></button>
  );
};

export default CloseButton;
