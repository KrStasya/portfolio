import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import style from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonPropsType = DefaultButtonPropsType & {
  title: string;
};

export const Button: React.FC<ButtonPropsType> = ({ title, ...restProps }) => (
  <button type="button" className={style.button} {...restProps}>
    {title}
  </button>
);
