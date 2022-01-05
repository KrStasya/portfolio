import React from 'react';

import style from './work.module.css';

import { Button } from 'common/components/button/Button';
import Title from 'common/components/title/Title';
import styleContaiher from 'common/styles/Container.module.css';

export const Work: React.FC = () => (
  <div className={style.workBlock}>
    <div className={`${styleContaiher.container} ${style.workContainer}`}>
      <Title text="Work" />
      <Button title="Sent" />
    </div>
  </div>
);
