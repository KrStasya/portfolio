import styleContaiher from "../common/styles/Container.module.css";
import React from "react";
import style from './contact.module.css'
import {Button} from "../common/components/button/Button";
import {Input} from "../common/components/input/Input";


export function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContaiher.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                    <form className={style.formItem}>
                        <Input/>
                        <Input/>
                        <textarea className={style.textarea} placeholder={"Поле ввода"} rows={20}/>
                    </form>
                <Button title={"Sent"}/>
            </div>
        </div>
    )
}

