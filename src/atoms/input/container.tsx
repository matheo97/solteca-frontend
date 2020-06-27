import React from 'react';
import './container.scss';

interface Props {
  onChange(): void; 
  height?: number;
  type?: 'text' | 'email' | 'password';
  width?: number;
}

const Input = (props: Props) => {
  return (
    <input 
      className='input-personalized'
      type={props.type ? props.type : 'text'}
      style={{ width: props.width, height: props.height }}
      onChange={props.onChange}
    />
  );
}

export default Input;