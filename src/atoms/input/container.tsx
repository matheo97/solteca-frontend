import React from 'react';
import './container.scss';

interface Props {
  name?: string;
  defaultValue?: string;
  register?: any;
  onChange?(): void; 
  height?: number | string;
  type?: 'text' | 'email' | 'password' | 'number';
  width?: number | string;
  placeholder?: string;
}

const Input = (props: Props) => {
  return (
    <div className='input-personalized-wrapper'>
      <input 
        className='input-personalized'
        type={props.type ? props.type : 'text'}
        style={{ width: props.width, height: props.height }}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        ref={props.register}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}

export default Input;