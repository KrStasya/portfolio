import React from 'react';

import style from './contact.module.css';

import { Input } from 'common/components/input/Input';
import Title from 'common/components/title/Title';
import styleContaiher from 'common/styles/Container.module.css';

export const Contact: React.FC = () => (
  <div className={style.contactBlock}>
    <div className={`${styleContaiher.container} ${style.contactContainer}`}>
      <Title text="Contact with me" />
      <form className={style.formItem}>
        <Input />
        <Input />
        <textarea className={style.textarea} placeholder="Поле ввода" rows={20} />
        <button type="submit" className={style.button}>
          Sent
        </button>
      </form>
    </div>
  </div>
);
