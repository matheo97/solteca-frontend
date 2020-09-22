import { Button } from 'atoms';
import { Modal } from 'components';
import React from 'react';
import confirmIcon from '../../images/general/confirm.svg';

import './container.scss';

interface Props {
  message: string;
  show: boolean;
  onClose(): void;
  onConfirm(): void;
}

const ConfirmationModal = (props: Props) => (
  <Modal
    show={props.show}
    onClose={props.onClose}
  >
    <div className='confimation-modal'>
      <div className='central-message'>
        <img src={confirmIcon} alt='confimation-moda-icon'/>
        <p className='message'>{props.message}</p>
      </div>
      <div className='actions'>
        <Button 
          copy='CANCELAR'
          type='terciary'
          onClick={props.onClose}
        />
        <Button 
          copy='CONFIRMAR'
          type='primary'
          onClick={props.onClose}
        />
      </div>
    </div>
  </Modal> 
);

export default ConfirmationModal;
