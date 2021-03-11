import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input, InputBorderBottom } from 'atoms';
import { BillTable } from 'components';
import { billService } from 'services/bill';
import { Product, Props } from './bill.props';

import './container.scss';
import { header } from './bill.constants';
import { useFieldArray } from 'react-hook-form';
import { IVA } from 'shared/constants/taxes';
import { moneyDeformatter, moneyFormatter } from 'shared/utils/moneyFormatter';

const Bill = ({
  isQuote,
  type,
  action,
  selectedBill,
  showModal,
  hideModal,
}: Props) => {
  const { control, handleSubmit, reset, setValue, getValues } = useForm({
    defaultValues: {
      billNo: selectedBill?.billNo ? selectedBill?.billNo : '',
      date: selectedBill?.date
        ? selectedBill?.date
        : new Date().toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
      otherExpenses: selectedBill?.otherExpenses
        ? selectedBill?.otherExpenses
        : null,
      iva: selectedBill?.iva ? selectedBill?.iva : null,
      totalValue: selectedBill?.totalValue ? selectedBill?.totalValue : null,
      provider: selectedBill?.provider ? selectedBill?.provider : null,
      products: selectedBill?.products
        ? selectedBill?.products
        : [
            {
              quantityField: 1,
              productField: null,
              detailField: null,
              totalField: null,
            },
          ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'products',
  });

  const getConsecutive = useCallback(async () => {
    const { consecutive } = await billService.getBillConsecutive();
    setValue('billNo', consecutive);
  }, [setValue]);

  useEffect(() => {
    getConsecutive();
  }, [getConsecutive]);

  const calculateIvaAndTotal = () => {
    const { otherExpenses, products } = getValues();
    console.log('type of otherExpense', typeof otherExpenses);
    let total = otherExpenses ? parseInt(otherExpenses, 10) : 0;

    (products as Product[])?.map((product) => {
      const { totalField, quantityField } = product;
      if (totalField) {
        const quantity = quantityField ? parseInt(quantityField, 10) : 1;
        total += parseInt(totalField, 10) * quantity;
      }
    });

    const totalIva = total * IVA;

    setValue('iva', totalIva);
    setValue('totalValue', total + totalIva);
  };

  const onSubmit = (data: any) => console.log(data, type);

  return (
    <div className="create-bills-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="top-form">
          <div>
            <span className="label">{`Numero de ${
              isQuote ? 'cotizacion' : 'factura'
            }`}</span>
            <Controller
              name="billNo"
              control={control}
              render={({ name, value }) => (
                <Input name={name} type={'number'} value={value} />
              )}
            />
          </div>
          <div>
            <span className="label">Fecha</span>
            <Controller
              name="date"
              control={control}
              render={({ name, value }) => (
                <Input name={name} value={value} width={'210px'} />
              )}
            />
          </div>
        </div>
        <div className="center-content">
          <div className="dynamic-form-wrapper">
            <div className="dynamic-form">
              <BillTable
                header={header(isQuote, action)}
                isQuote={isQuote}
                fields={fields}
                append={append}
                control={control}
                calculateTotalAndIva={calculateIvaAndTotal}
              />
            </div>
          </div>
          <div className="provider-actions">
            <div className="provider-form">
              <div className="provider-field">
                <span className="label">
                  {`${type === 'purchase' ? 'Proveedor' : 'Cliente'}`}
                </span>
                <Controller
                  name="provider"
                  control={control}
                  render={({ name, value }) => (
                    <Input name={name} value={value} />
                  )}
                />
              </div>
              <div className="provider-bottom-form">
                {isQuote && type === 'purchase' ? null : (
                  <>
                    <div className="provider-bottom-name">
                      {!isQuote ? (
                        <>
                          <span className="label">otros gastos</span>
                          <span className="label">total iva</span>
                        </>
                      ) : null}
                      <span className="label">total factura</span>
                      {isQuote && type === 'sells' ? (
                        <span className="warning">
                          El total de la factura no incluye IVA
                        </span>
                      ) : null}
                    </div>
                    <div className="provider-bottom-fields">
                      {!isQuote ? (
                        <>
                          <Controller
                            name="otherExpenses"
                            control={control}
                            render={({ name, value, onChange }) => (
                              <InputBorderBottom
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  onChange(e);
                                  calculateIvaAndTotal();
                                }}
                                type="number"
                                value={value}
                                name={name}
                                showDollarSign={true}
                              />
                            )}
                          />
                          <Controller
                            name="iva"
                            control={control}
                            render={({ name, value }) => (
                              <InputBorderBottom
                                name={name}
                                type="number"
                                value={value}
                                showDollarSign={true}
                                readOnly
                              />
                            )}
                          />
                        </>
                      ) : null}
                      <Controller
                        name="totalValue"
                        control={control}
                        render={({ name, value }) => (
                          <InputBorderBottom
                            name={name}
                            type="number"
                            value={value}
                            showDollarSign={true}
                          />
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            {action === 'show' ? null : (
              <div className="actions">
                {action !== 'edit' ? (
                  <Button copy="LIMPIAR" type="terciary" onClick={reset} />
                ) : null}
                <Button
                  copy={`${action === 'create' ? 'CREAR' : 'ACTUALIZAR'} ${
                    isQuote ? 'COTIZACION' : 'FACTURA'
                  }`}
                  type="primary"
                />
                <Button
                  copy="CANCELAR"
                  type="secondary"
                  onClick={calculateIvaAndTotal}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Bill;
