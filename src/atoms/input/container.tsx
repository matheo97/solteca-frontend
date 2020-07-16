import React from 'react';
import './container.scss';

interface Props {
  onChange(): void; 
  height?: number;
  type?: 'text' | 'email' | 'password';
  width?: number | string;
  placeholder?: string;
  icon?: string;
}

const Input = (props: Props) => {
  return (
    <div className='input-personalized-wrapper'>
      { props.icon ? <img className='icon' src={props.icon} alt='seach-icon'/> : null }
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