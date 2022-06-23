import React from 'react';
import clsx from 'clsx';
import Project from 'components/mainComponents/Project';
import { AllWidthButton } from 'components/common/Buttons';
import { projects } from 'constants/data';
import style from './index.module.scss';

const imgMini = [1, 2, 5, 6];

const ProjectsSection = () => {
  return (
    <div className={clsx(style.projects, 'wrapper')}>
      {!!projects?.length &&
        projects.map((project, index) => (
          <Project key={project.id} {...project} isSmall={imgMini.includes(index)} />
        ))}
      <AllWidthButton customClassName={style.projects__button}>Все проекты</AllWidthButton>
    </div>
  );
};

export default ProjectsSection;
