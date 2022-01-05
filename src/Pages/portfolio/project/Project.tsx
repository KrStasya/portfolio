import React from 'react';

import { Button } from '../../../common/components/button/Button';

import s from './Project.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  style: any;
};

const Project: React.FC<ProjectPropsType> = ({ title, description, style }) => (
  <div className={s.project}>
    <div className={s.picture} style={style}>
      <a className={s.look} href={' '}>
        <Button title="Look" />
      </a>
    </div>
    <div className={s.projectInfo}>
      <h3 className={s.projecttitle}>{title}</h3>
      <span className={s.description}>{description}</span>
    </div>
  </div>
);

export default Project;
