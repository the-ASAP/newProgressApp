import React from 'react';
import clsx from 'clsx';
import Project from 'components/mainComponents/Project';
import AllWidthButton from 'components/common/AllWidthButton';
import { projects } from 'constants/data';
import style from './index.module.scss';

const ProjectsSection = () => {
  return (
    <div className={clsx(style.projects, 'wrapper')}>
      {!!projects?.length && projects.map((project) => <Project key={project.id} {...project} />)}
      <AllWidthButton>Все проекты</AllWidthButton>
    </div>
  );
};

export default ProjectsSection;
