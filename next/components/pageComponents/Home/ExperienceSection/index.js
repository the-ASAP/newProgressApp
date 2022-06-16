import React from 'react';
import clsx from 'clsx';
import { experience } from 'constants/data';
import style from './index.module.scss';

const ExperienceSection = () => {
  return (
    <div className={clsx(style.experience, 'wrapper')}>
      <span className={style.experience__title}>
        <span className={clsx(style.experience__title, style.experience__title_green)}>
          Наш опыт{' '}
        </span>
        в&nbsp;разработке для разных отраслей
      </span>
      <div className={style.experience__categories}>
        {!!experience?.length &&
          experience.map((category) => (
            <button type="button" className={style.experience__category} key={category.id}>
              {category.title}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
