import React, { useState } from 'react';
import './container.scss';

const Toggle = () => {

  const [state, setState] = useState(false);

  return (
    <div className='toggle-wrapper'>
      <div 
        className={`toggle ${state ? 'green' : undefined}`}
        onClick={() => setState(!state)}
      >
        <div className={`toggle-circle ${state ? 'right' : undefined}`}>
        </div>
      </div>
      <span className={`toggle-copy ${ state ? 'green' : undefined }`}>
        { state ? 'VENTAS' : 'COMPRAS' }
      </span>
    </div>
  );
} 

export default Toggle;