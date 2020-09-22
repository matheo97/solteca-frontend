import React, { useCallback } from 'react';
import { Button, Input } from '../../atoms';
import { useForm } from 'react-hook-form';
import { Modal } from '../../components';

import './createContact.scss';

interface Props {
  onClose(): void;
  show: boolean;
} 

export const CreateContactModal = (props: Props) => {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = useCallback((values) => {
    console.log('values', values);
    props.onClose();
  }, [props]);

  return (
    <Modal
      show={props.show}
      onClose={props.onClose}
    >
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label='NOMBRE' name='name' register={register} />
          <Input label='CARGO' name='role' register={register} />
          <Input label='CELULAR' name='phone' register={register} />
          <Input label='EMAIL' name='email' register={register} />
          <div className='actions'>
            <Button 
              copy='LIMPIAR'
              type='terciary'
              onClick={reset}
              buttonType='button'
            />
            <Button 
              copy='CREAR'
              type='primary'
              buttonType='submit'
            />
          </div>
        </form>
      </div>
    </Modal> 
  );
}