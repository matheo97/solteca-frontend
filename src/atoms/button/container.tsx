import React from 'react';
import './container.scss';

interface Props {
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  copy: string;
  height?: number;
  type: 'primary' | 'secondary' | 'terciary';
  width?: number;
  onClick?(): void;
}

const Button = ({
  buttonType = 'button',
  ...props
}: Props) => {
  return (
    <button 
      className={`button-personalized ${props.type}`}
      onClick={props.onClick}
      style={{ width: `${props.width}rem`, height: `${props.height}rem` }}
      type={buttonType}
    >
      {props.copy}
    </button>
  );
}

export default Button;