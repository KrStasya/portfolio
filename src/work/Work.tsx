import styleContaiher from "../common/styles/Container.module.css";
import React from "react";
import style from './work.module.css'
import {Button} from "../common/components/button/Button";


export function Work () {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContaiher.container} ${style.workContainer}`}>
                <h2 className={style.title}>Work</h2>
                <Button title={"Sent"}/>
            </div>
        </div>
    )

}

