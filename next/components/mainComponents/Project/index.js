import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import style from './index.module.scss';
import loader from 'public/loader4.gif';

const Project = ({ photo, text, tags, isSmall, isLink, path }) => {
  return (
    <div className={clsx(style.project, isSmall && style.project__small)}>
      <div className={style.project__content}>
        {/* <div
          className={clsx(style.project__image, isSmall && style.project__image__small)}
          style={{ backgroundImage: `url('${loader.src}')` }}
        >
          <Image
            alt="project"
            layout="fill"
            objectFit="cover"
            // objectFit="contain"
            src={photo}
            priority="true"
            quality={100}
          />
        </div> */}

        {isLink ? (
          <a
            href={path}
            target="blank"
            className={clsx(style.project__image, isSmall && style.project__image__small)}
          >
            <img src={photo} alt="" />
          </a>
        ) : (
          <div className={clsx(style.project__image, isSmall && style.project__image__small)}>
            <img src={photo} alt="" />
          </div>
        )}

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
