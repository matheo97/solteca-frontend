import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, InputBorderBottom } from 'atoms';
import { BillTable } from 'components';
import './container.scss';

interface Props {
  showModal(
    type: 'purchase' | 'sells', 
    action: 'create' | 'edit' | 'show',
    isQuote: boolean,
  ): void; 
  hideModal(): void; 
  type: 'purchase' | 'sells';
  isQuote: boolean;
  action: 'create' | 'edit' | 'show';
  selectedBill?: Bill;
} 

interface Bill {
  billNo: string;
  date: string;
  provider: string;
  otherExpenses: string;
  iva: string;
  totalValue: string;
  products: Array<{
    totalField1: string;
    detailField1: string;
    productField1: string;
    quantityField1: string;
  }>;
}

const Bill = ({ isQuote, type, action, selectedBill, showModal, hideModal }: Props) => {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      ...selectedBill,
    }
  });
  const [ numberOfRows, setNumberOfRows ] = useState(
    (selectedBill && selectedBill.products && selectedBill.products.length) || 1);
  const onSubmit = (data: any) => console.log(data, type);

  const header = ( isQuote && action === 'create' ? [
    { name: 'CANTIDAD', width: '25%' },
    { name: 'PRODUCTO', width: '35%' },
    { name: 'DETALLE', width: '50%' },
  ] : [
    { name: 'CANTIDAD', width: '15%' },
    { name: 'PRODUCTO', width: '25%' },
    { name: 'DETALLE', width: '40%' },
    { name: 'VALOR TOTAL', width: '30%' },
  ]);

  const calculateTotal = () => {
    let value = 1;
    let total = 0;
    while (value <= numberOfRows) {
      let currentFieldValue = watch(`totalField${value}`);
      let quantityFieldValue = watch(`quantityField${value}`);
      if (currentFieldValue) {
        const quantity = quantityFieldValue ?  parseInt((quantityFieldValue as string), 10) : 1;
        total += (parseInt((currentFieldValue as string), 10) * quantity);
      }
      value++;
    }
    let otherExpenses = watch('otherExpenses');
    if (otherExpenses) total += parseInt((otherExpenses as any), 10);
    return total;
  }

  const calculateIva = () => {
    const total = watch('totalValue');
    if (total) return parseFloat((total as any)) * .19;
    return 0;
  }

  return (
    <div className='create-bills-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='top-form'>
          <div>
            <span className='label'>{`Numero de ${ isQuote ? 'cotizacion' : 'factura' }`}</span>  
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
                isQuote={isQuote}
              />
            </div>
          </div>
          <div className='provider-actions'>
            <div className='provider-form'>
              <div className='provider-field'>
                <span className='label'>{`${type === 'purchase' ? 'Proveedor' : 'Cliente'}`}</span>  
                <Input 
                  name='provider'
                  register={register}
                />
              </div>
              <div className='provider-bottom-form'>
                { isQuote && type === 'purchase' ? null : (
                  <>
                    <div className='provider-bottom-name'>
                      { !isQuote ? (
                        <>
                          <span className='label'>otros gastos</span>  
                          <span className='label'>total iva</span>
                        </>
                      ) : null }
                      <span className='label'>total factura</span> 
                      { isQuote && type === 'sells' ? <span className='warning'>El total de la factura no incluye IVA</span> : null }
                    </div>
                    <div className='provider-bottom-fields'>
                      { !isQuote ? (
                        <>
                          <InputBorderBottom 
                            name='otherExpenses'
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
                        </>
                      ) : null }
                      <InputBorderBottom 
                        name='totalValue'
                        register={register}
                        type='number'
                        value={calculateTotal()}
                        showDollarSign={true}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            { action === 'show' ? null : (
                <div className='actions'>
                  { action !== 'edit' ? (
                      <Button 
                        copy='LIMPIAR'
                        type='terciary'
                        onClick={reset}
                      />
                  ) : null}
                  <Button 
                    copy={`${action === 'create' ? 'CREAR' : 'ACTUALIZAR'} ${isQuote ? 'COTIZACION' : 'FACTURA'}`}
                    type='primary'
                  />
                  <Button 
                    copy='CANCELAR'
                    type='secondary'
                    onClick={hideModal}
                  />
                </div>
              )
            }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Bill;
