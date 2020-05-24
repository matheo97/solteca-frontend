import React from 'react';
import icon from '../../images/card/loop.svg';

import './container.scss';

interface Props {
  icon: string;
  title: string;
  value: string;
  color: string;
  date?: string;
  quarter?: number;
}

const Card = (props: Props) => (
  <div className='card-container'>
    <div className='title'>{props.title}:</div>
    <div className={`value ${props.color}`}>{props.value}</div>
    <div className='icon'>
      <img src={props.icon} alt='Icon'/>
    </div>
    {props.date ? (
      <>
        <div className='date'>{props.date}</div>
        <img className='update-icon' src={icon} alt='Update Bank Account'/>
      </>
    ) : null}
    {props.quarter ? (
      <div className='quarter'>cuatrimestre {props.quarter}</div>
    ) : null}
  </div>
);

export default Card;
