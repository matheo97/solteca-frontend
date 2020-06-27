import React from 'react';
import './container.scss';

interface Props {
  copy: string;
  onClick?(): void;
  type: 'primary' | 'secondary' | 'terciary';
  height?: number;
  width?: number;
}

const Button = (props: Props) => {
  return (
    <button 
      className={`button-personalized ${props.type}`}
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
    >
      {props.copy}
    </button>
  );
}

export default Button;