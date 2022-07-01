import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import loader from 'public/loader4.gif';
import style from './index.module.scss';

const Project = ({ photo, text, tags, isSmall }) => {
  return (
    <div className={clsx(style.project, isSmall && style.project__small)}>
      <div className={style.project__content}>
        <div
          style={{ backgroundImage: `url('${loader.src}')` }}
          className={clsx(style.project__image, isSmall && style.project__image__small)}
        >
          <Image alt="project" layout="fill" objectFit="cover" src={photo} />
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
