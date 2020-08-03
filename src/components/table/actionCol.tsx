import React, { useState, useCallback } from 'react';
import dots from '../../images/table/actions-dots.svg';

import './actionCol.scss';

interface Props {

}

const ActionCol = (props: Props) => {

  const [ showActions, setShowActions ] = useState(false);

  const toggleOptions = useCallback(() => setShowActions(!showActions), [showActions]);

  return (
    <div className='action-col' onClick={toggleOptions}>
      <img src={dots} className='dots' alt='dots' />
      { showActions ? (
        <div className='actions'>
          <div className='actions-container'>
            <div className='arrow-up'></div>
          </div>
        </div>
      ) : null }
    </div >
  );
}

export default ActionCol;