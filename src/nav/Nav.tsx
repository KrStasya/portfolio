import React from 'react';
import style from './Nav.module.css'

function Nav () {
    return(
          <div className={style.navblock}>
              <a href="HELLO">HELLO</a>
              <a href="ABOUT">ABOUT</a>
              <a href="PORTFOLIO">PORTFOLIO</a>
              <a href="CONTACT">CONTACT</a>
          </div>

    )
}
export default Nav