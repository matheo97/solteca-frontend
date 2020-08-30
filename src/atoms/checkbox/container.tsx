import React from 'react';

import './container.scss';

interface Props {
  name: string;
  checked: boolean;
  onChange(): void;
}

const Checkbox = (props: Props) => (
  <label className='check-box-container'>
    {props.name}
    <input
      className='check-box-input' 
      type='checkbox'
      checked={props.checked} 
      onChange={props.onChange} 
    />
    <span className='checkmark'></span>
  </label>
);

export default Checkbox;