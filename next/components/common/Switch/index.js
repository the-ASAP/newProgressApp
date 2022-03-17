import React, { useState } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Switch = ({customClassName, ...props}) => {
  const [leftPosition, setLeftPosition] = useState(true)

  return (
    <button
      type="button"
      className={clsx(style.switch, style[customClassName])}
      onClick={() => setLeftPosition(prev => !prev)}
      {...props}
    >
      <div className={clsx(
        style.switch__circle,
        leftPosition || style.switch__circle_right
      )}></div>
      <span className={style.switch__word}>Light</span>
      <span className={style.switch__word}>Dark</span>
    </button>
  );
}

export default Switch;
