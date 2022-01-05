import React from 'react';

import styleContaiher from '../../common/styles/Container.module.css';

import { Element } from './element/Element';
import style from './Footer.module.css';

const Footer: React.FC = () => (
  <div className={style.footer}>
    <div className={`${styleContaiher.container} ${style.footerContainer}`}>
      <div className={style.text}>
        <h3>Anastasia Krautsova</h3>
        <div className={style.element}>
          <Element />
          <Element />
          <Element />
          <Element />
        </div>
        <p>2021 all ri </p>
      </div>
    </div>
  </div>
);

export default Footer;
