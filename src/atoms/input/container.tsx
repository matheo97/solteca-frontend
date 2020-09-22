import React from 'react';
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
  onChange?(): void;
}

const Input = (props: Props) => {
  return (
    <div className='input-personalized-wrapper'>
      { props.label ? <p className={'label'}>{props.label}</p> : null }
      <input 
        className='input-personalized'
        defaultValue={props.defaultValue}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={props.register}
        style={{ width: props.width, height: props.height }}
        type={props.type ? props.type : 'text'}
      />
    </div>
  );
}

export default Input;