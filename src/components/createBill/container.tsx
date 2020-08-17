import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, InputBorderBottom } from 'atoms';
import { BillTable } from 'components';
import './container.scss';

interface Props {
  toggleModal(): void; 
} 

const CreateBill = (props: Props) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [ numberOfRows, setNumberOfRows ] = useState(1);
  const onSubmit = (data: any) => console.log(data);
  const header = [
    { name: 'CANTIDAD', width: '15%' },
    { name: 'PRODUCTO', width: '25%' },
    { name: 'DETALLE', width: '40%' },
    { name: 'VALOR TOTAL', width: '30%' },
  ];
  const calculateTotal = () => {
    let value = 1;
    let total = 0;
    while (value <= numberOfRows) {
      let currentFieldValue = watch(`total-${value}`);
      let quantityFieldValue = watch(`quantity-${value}`);
      if (currentFieldValue) {
        const quantity = quantityFieldValue ?  parseInt(quantityFieldValue, 10) : 1;
        total += (parseInt(currentFieldValue, 10) * quantity);
      }
      value++;
    }
    let otherExpenses = watch('other-expenses');
    if (otherExpenses) total += parseInt(otherExpenses, 10);
    // const iva = total * .19;
    // setValue('iva', iva);
    return total;
  }

  const calculateIva = () => {
    const total = watch('total-value');
    if (total) return parseFloat(total) * .19;
    return 0;
  }

  return (
    <div className='create-bills-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='top-form'>
          <div>
            <span className='label'>Numero de factura</span>  
            <Input 
              name='billNo'
              type='number'
              register={register}
            />
          </div>
          <div>
            <span className='label'>Fecha</span>  
            <Input 
              name='date'
              register={register}
            />
          </div>
        </div>
        <div className='center-content'>
          <div className='dynamic-form-wrapper'>
            <div className='dynamic-form'>
              <BillTable 
                header={header}
                register={register}
                numberOfRows={numberOfRows}
                setNumberOfRows={setNumberOfRows}
              />
            </div>
          </div>
          <div className='provider-actions'>
            <div className='provider-form'>
              <div className='provider-field'>
                <span className='label'>Proveedor</span>  
                <Input 
                  name='provider'
                  register={register}
                />
              </div>
              <div className='provider-bottom-form'>
                <div className='provider-bottom-name'>
                  <span className='label'>otros gastos</span>  
                  <span className='label'>total iva</span>  
                  <span className='label'>total factura</span> 
                </div>
                <div className='provider-bottom-fields'>
                  <InputBorderBottom 
                    name='other-expenses'
                    register={register}
                    type='number'
                    showDollarSign={true}
                  />
                  <InputBorderBottom 
                    name='iva'
                    register={register}
                    type='number'
                    showDollarSign={true}
                    value={calculateIva()}
                  />
                  <InputBorderBottom 
                    name='total-value'
                    register={register}
                    type='number'
                    value={calculateTotal()}
                    showDollarSign={true}
                  />
                </div>
              </div>
            </div>
            <div className='actions'>
              <Button 
                copy='LIMPIAR'
                type='terciary'
                onClick={reset}
              />
              <Button 
                copy='CREAR FACTURA'
                type='primary'
              />
              <Button 
                copy='CANCELAR'
                type='secondary'
                onClick={props.toggleModal}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBill;
