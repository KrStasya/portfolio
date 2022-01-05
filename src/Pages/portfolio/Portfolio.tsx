import React from 'react';

import counter from '../../assets/image/counter.png';
import net from '../../assets/image/network.jpg';
import Title from '../../common/components/title/Title';
import styleContaiher from '../../common/styles/Container.module.css';

import style from './Portfolio.module.scss';
import Project from './project/Project';

const Portfolio: React.FC = () => {
  const count = {
    color: 'blue',
    borderRadius: '6px',
    backgroundImage: `url(${counter})`,
  };
  const network = {
    color: 'blue',
    borderRadius: '6px',
    backgroundImage: `url(${net})`,
  };
  return (
    <div className={style.portfolioBlock}>
      <div className={`${styleContaiher.container} ${style.portfolioContainer}`}>
        <Title text="Portfolio" />
        <div className={style.projects}>
          <Project
            style={count}
            title="Counter"
            description="Thinks something, but it is not accurate"
          />
          <Project style={network} title="Network" description={"It's a shame"} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
