import React from 'react';

import style from './input.module.css';

export const Input: React.FC = () => (
  <input className={style.input} placeholder="Enter field" />
);
