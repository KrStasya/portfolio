import React from 'react';
import style from './Hello.module.css'
import styleContaiher from '../common/styles/Container.module.css'


function Hello() {
    return (
        <div className={style.hello}>
            <div className={styleContaiher.container}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>Anastasia Krautsova</h1>
                <p>Frotend Developer</p>
            </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>

    )
}

export default Hello