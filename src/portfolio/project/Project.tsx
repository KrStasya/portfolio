import React from 'react';
import style from './Project.module.css'
import {Button} from "../../common/components/button/Button";

type ProjectPropsType={
    title: string
    picture:string
    description:string

}

function Skill(props:ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                <a className={style.look} href={" "}>
                   <Button title={"Look"}/>
                </a>
                {props.picture}
            </div>
            <p>{props.title}</p>
            <span className={style.description}>{props.description}</span>
        </div>

    )
}

export default Skill