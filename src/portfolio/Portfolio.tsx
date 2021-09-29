import React from 'react';
import styleContaiher from '../common/styles/Container.module.css'
import Project from "./project/Project";
import style from './Portfolio.module.css'



function Portfolio () {
    return (
        <div className={style.portfolioBlock}>
            <div className={`${styleContaiher.container} ${style.portfolioContainer}`}>
                <h2 className={style.title}>Let's See My Work</h2>
                <div className={style.projects}>
                    <Project title={"Counter"} description={"Thinks something, but it is not accurate"} picture={" "}/>
                    <Project title={"Network"} description={"It's a shame"} picture={" "}/>
                </div>
            </div>

        </div>

    )
}

export default Portfolio

