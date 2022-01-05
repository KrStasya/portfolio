import React from 'react';

import style from './Features.module.css';
import Skill from './features/Skill';

import Title from 'common/components/title/Title';
import styleContaiher from 'common/styles/Container.module.css';

const Features: React.FC = () => (
  <div className={style.resumeBlock}>
    <div className={`${styleContaiher.container} ${style.resumeContainer}`}>
      <Title text="My features" />
      <div className={style.skills}>
        <Skill title="JS" description="dsdsvgfhgrajnhr;thvpuyfhdsvjg" />
        <Skill
          title="CSS"
          description="dsdsvgdghghh ,irl dytm,;.p,mnb fdcevYTSJST JUTUITSU fdgdghg  5y5y yt  "
        />
        <Skill title="React" description="dsdsv T RTYYRTU YTJJhdj dkud rsbrtgT" />
      </div>
    </div>
  </div>
);

export default Features;
