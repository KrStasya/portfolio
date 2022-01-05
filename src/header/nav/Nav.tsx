import React from 'react';

import style from './Nav.module.css';

const Nav: React.FC = () => (
  <div className={style.navblock}>
    <a className={style.home} href="Home">
      Home
    </a>
    <a className={style.features} href="Features">
      features
    </a>
    <a className={style.portfolio} href="PORTFOLIO">
      Portfolio
    </a>
    <a className={style.contact} href="CONTACT">
      Contact{' '}
    </a>
  </div>
);
export default Nav;
