import React from 'react';
import { Button, Input } from '../../atoms';
import bank from '../../images/dashboard/bank.svg';

import './updateBankAccountModal.scss';

interface Props {
  onCancel(): void;
}

const UpdateBankAccount = (props: Props) => {
  return (
    <div className='update-bank-account'>
      <img className='logo' src={bank} alt='bank account logo'/>
      <span className='title'>DINERO ACTUALMENTE EN LA CUENTA DE AHORROS</span>
      <span className='bank-account-value'>2.000.000</span>
      <span className='last-date'>FEBRERO 21 DE 2020</span>
      <Input onChange={onChange}/>
      <div className='footer-buttons'>
        <Button 
          copy='CANCELAR'
          type='secondary'
          onClick={props.onCancel}
        />
        <Button 
          copy='ACTUALIZAR'
          type='primary'
        />
      </div>
    </div>
  );
}

const onChange = () => {
  console.log('update state variable in dashboard');
}

export default UpdateBankAccount;