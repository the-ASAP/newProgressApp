import React from 'react';
import clsx from 'clsx';

import style from './index.module.scss';

const CloseButton = ({ children, customClassName, ...props }) => {
  return (
    <button type="button" className={clsx(style.close__button, customClassName)} {...props}>
      {children}
    </button>
  );
};

export default CloseButton;
