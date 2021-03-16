import React, { ChangeEvent } from 'react';
import './container.scss';

interface Props {
  defaultValue?: string;
  height?: number | string;
  name?: string;
  placeholder?: string;
  showDollarSign?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  width?: number | string;
  value?: string;
  readOnly?: boolean;
}

const InputBorderBottom = (props: Props) => {
  return (
    <div className="input-boder-bottom">
      {props.showDollarSign ? <span className="dollar-sign">$</span> : null}
      <input
        {...props}
        className="input-personalized"
        style={{ width: props.width, height: props.height }}
        type={props.type ? props.type : 'text'}
      />
    </div>
  );
};

export default InputBorderBottom;
