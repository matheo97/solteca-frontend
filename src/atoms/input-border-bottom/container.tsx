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
  showDollarSign?: boolean;
  value?: number;
}

const InputBorderBottom = (props: Props) => {
  return (
    <div className='input-boder-bottom'>
      { props.showDollarSign ? (<span className='dollar-sign'>$</span>) : null }
      <input 
        className='input-personalized'
        type={props.type ? props.type : 'text'}
        style={{ width: props.width, height: props.height }}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        ref={props.register}
        defaultValue={props.defaultValue}
        value={props.value}
      />
    </div>
  );
}

export default InputBorderBottom;