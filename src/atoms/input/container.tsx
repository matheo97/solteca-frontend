import React, { ChangeEvent } from 'react';
import './container.scss';

interface Props {
  defaultValue?: string;
  height?: number | string;
  label?: string;
  name?: string;
  placeholder?: string;
  register?: any;
  type?: 'text' | 'email' | 'password' | 'number';
  width?: number | string;
  value?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: Props) => {
  return (
    <div className="input-personalized-wrapper">
      {props.label ? <p className={'label'}>{props.label}</p> : null}
      <input
        {...props}
        className="input-personalized"
        style={{ width: props.width, height: props.height }}
        type={props.type ? props.type : 'text'}
      />
    </div>
  );
};

export default Input;
