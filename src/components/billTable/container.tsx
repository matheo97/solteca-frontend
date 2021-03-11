import React, { ChangeEvent } from 'react';
import addIcon from '../../images/bill-table/add-icon.svg';
import { InputBorderBottom } from 'atoms';
import { Controller } from 'react-hook-form';

import './container.scss';
import { moneyFormatter } from 'shared/utils/moneyFormatter';

interface Props {
  header: Array<{ name: string; width: string }>;
  isQuote: boolean;
  calculateTotalAndIva: any;
  control: any;
  fields: any;
  append: any;
}

const BillTable = ({
  isQuote,
  header,
  control,
  fields,
  append,
  calculateTotalAndIva,
}: Props) => {
  const createHeader = (header: Array<{ name: string; width: string }>) => (
    <thead className="bill-table-header-wrapper">
      <tr className="bill-table-header">
        {header.map(
          (element: { name: string; width: string }, index: number) => (
            <th
              key={index}
              style={{ width: element.width }}
              className="header-element"
            >
              {element.name}
            </th>
          )
        )}
      </tr>
    </thead>
  );
  return (
    <table className="bill-table">
      {createHeader(header)}
      <tbody className="bill-table-body-wrapper">
        {fields.map((item: any, index: number) => (
          <tr key={item.id} className="row">
            <td className="row-element first-element" key={1}>
              <Controller
                name={`products[${index}].quantityField`}
                control={control}
                defaultValue={item.quantityField}
                render={({ onChange, name, value }) => (
                  <InputBorderBottom
                    name={name}
                    value={value}
                    width={'2.9rem'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      onChange(e);
                      calculateTotalAndIva();
                    }}
                  />
                )}
              />
            </td>
            <td className="row-element" key={2}>
              <Controller
                name={`products[${index}].productField`}
                control={control}
                defaultValue={item.productField}
                render={({ name, value }) => (
                  <InputBorderBottom name={name} value={value} />
                )}
              />
            </td>
            <td className="row-element" key={3}>
              <Controller
                name={`products[${index}].detailField`}
                control={control}
                defaultValue={item.detailField}
                render={({ name, value }) => (
                  <InputBorderBottom name={name} value={value} />
                )}
              />
            </td>
            {!isQuote ? (
              <td className="row-element" key={4}>
                <Controller
                  name={`products[${index}].totalField`}
                  control={control}
                  defaultValue={item.totalField}
                  render={({ onChange, name, value }) => (
                    <InputBorderBottom
                      name={name}
                      showDollarSign={true}
                      value={value}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        onChange(e);
                        calculateTotalAndIva();
                      }}
                    />
                  )}
                />
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
      <div
        className="add-icon"
        onClick={() =>
          append({
            quantityField: 1,
            productField: null,
            detailField: null,
            totalField: null,
          })
        }
      >
        <img src={addIcon} alt="" />
      </div>
    </table>
  );
};

export default BillTable;
