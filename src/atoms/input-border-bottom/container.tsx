import React, { ChangeEvent } from 'react';
import './container.scss';

interface Props {
  defaultValue?: string;
  height?: number | string;
  name?: string;
  placeholder?: string;
  register?: any;
  showDollarSign?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  onChange?(event: ChangeEvent<HTMLInputElement>): void; 
  value?: number;
  width?: number | string;
}

const InputBorderBottom = (props: Props) => {
  return (
    <div className='input-boder-bottom'>
      { props.showDollarSign ? (<span className='dollar-sign'>$</span>) : null }
      <input 
        className='input-personalized'
        defaultValue={props.defaultValue}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={props.register}
        style={{ width: props.width, height: props.height }}
        type={props.type ? props.type : 'text'}
        value={props.value}
      />
    </div>
  );
}

export default InputBorderBottom;