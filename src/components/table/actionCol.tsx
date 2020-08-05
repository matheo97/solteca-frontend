import React, { useState, useCallback } from 'react';
import dots from '../../images/table/actions-dots.svg';

import './actionCol.scss';

interface Props {
  paid: boolean;
}

interface Action {
  actionName: string;
  function(): void;
}

const ActionCol = (props: Props) => {

  const [ showActions, setShowActions ] = useState(false);

  const toggleOptions = useCallback((e) => { 
    console.log('toggle showActions');
    setShowActions(!showActions);
    e.preventDefault();
    e.stopPropagation()
  }, [showActions]);

  const generateListOfActions = useCallback((paid: boolean) => {
    const listOfActions = [
      {
        function: () => console.log('DESCARGAR PDF'),
        actionName: 'DESCARGAR PDF',
      },
      {
        function: () => console.log('EDITAR'),
        actionName: 'EDITAR',
      },
    ];
  
    if (paid) {
      listOfActions.push({
        function: () => console.log('MARCAR COMO NO PAGADA'),
        actionName: 'MARCAR COMO NO PAGADA',
      });
    } else {
      listOfActions.push({
        function: () => console.log('MARCAR COMO PAGADA'),
        actionName: 'MARCAR COMO PAGADA',
      });
    }
  
    return listOfActions;
  }, []);

  return (
    <div className='action-col' onClick={toggleOptions}>
      <img src={dots} className='dots' alt='dots' />
      { showActions ? (
        <div className='actions'>
          <div className='actions-container'>
            <div className='arrow-up'></div>
            { 
              generateListOfActions(props.paid).map((action: Action, index) => (
                <div 
                  id='action-element'
                  className='action-element' 
                  onClick={() => action.function()}
                  key={index}
                >
                  { action.actionName }
                </div>
              ))
            }
          </div>
        </div>
      ) : null }
    </div >
  );
};

export default ActionCol;