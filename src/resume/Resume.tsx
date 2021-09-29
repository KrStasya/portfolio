import React from 'react';
import style from './Resume.module.css'
import styleContaiher from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";


function Resume() {
    return (
        <div className={style.resumeBlock}>
            <div className={`${styleContaiher.container} ${style.resumeContainer}`}>
                <h2 className={style.title}>My resume</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"dsdsvgfhgrajnhr;thvpuyfhdsvjg"}/>
                    <Skill title={"CSS"} description={"dsdsvgdghghh ,irl dytm,;.p,mnb fdcevYTSJST JUTUITSU fdgdghg  5y5y yt  "}/>
                    <Skill title={"React"} description={"dsdsv T RTYYRTU YTJJhdj dkud rsbrtgT"}/>
                </div>
            </div>

        </div>

    )
}

export default Resume