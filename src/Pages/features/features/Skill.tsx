import React from 'react';

import style from './Skill.module.scss';

type SkillPropsType = {
  title: string;
  description: string;
};

const Skill: React.FC<SkillPropsType> = ({ title, description }) => (
  <div className={style.skill}>
    <div className={style.icon} />
    <h3>{title}</h3>
    <span className={style.description}>{description}</span>
  </div>
);

export default Skill;
