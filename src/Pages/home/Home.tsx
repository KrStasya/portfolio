import React from 'react';

import styleContaiher from '../../common/styles/Container.module.css';

import style from './Home.module.css';

const Home: React.FC = () => (
  <div className={style.hello}>
    <div className={styleContaiher.container}>
      <div className={style.text}>
        <span>Hi There</span>
        <h1>Anastasia Krautsova</h1>
        <p>Frotend Developer</p>
      </div>
      <div className={style.photo} />
    </div>
  </div>
);

export default Home;
