import React, { useState } from 'react';
import clsx from 'clsx';
import style from './index.module.scss';

const Switch = ({ customClassName, onSelectMode, darkMode, ...props }) => {
  const [leftPosition, setLeftPosition] = useState(true);

  const handleSwitch = () => {
    setLeftPosition((prev) => !prev);
    onSelectMode();
  };
  return (
    <button
      type="button"
      className={clsx(style.switch, style[customClassName], darkMode && style.switch__dark)}
      onClick={handleSwitch}
      {...props}
    >
      <div className={clsx(style.switch__circle, leftPosition || style.switch__circle_right)}></div>
      <span className={clsx(style.switch__word, darkMode && style.switch__word__dark)}>Light</span>
      <span className={clsx(style.switch__word, darkMode && style.switch__word__dark)}>Dark</span>
    </button>
  );
};

export default Switch;
