import React from 'react';
import './container.scss';

interface Props {
  onChange(): void; 
  height?: number;
  type?: 'text' | 'email' | 'password';
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
      />
    </div>
  );
}

export default Input;