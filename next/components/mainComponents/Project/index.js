import React from 'react';
import Image from 'next/image';
import style from './index.module.scss';

const Project = ({ photo, text, tags }) => {
  return (
    <div className={style.project}>
      <div className={style.project__content}>
        <div className={style.project__image}>
          <Image alt="project" layout="fill" src={photo} />
        </div>
        <span className={style.project__text}>{text}</span>
        <div className={style.project__tags}>
          {!!tags.length &&
            tags?.map((tag) => (
              <div className={style.project__tag} key={tag + Date.now()}>
                {tag}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
