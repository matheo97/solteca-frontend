import React, { useState } from 'react';
import addIcon from '../../images/bill-table/add-icon.svg';
import { InputBorderBottom } from 'atoms';
import './container.scss';

interface Props {
  header: Array<{ name: string, width: string }>;
  register: any;
  numberOfRows: number;
  isQuote: boolean;
  setNumberOfRows(n: number): void;
};

const BillTable = ({ isQuote, register, header, numberOfRows, setNumberOfRows }: Props) => {

  const [ rows, addRow ] = useState([
    (
      <tr key={1} className='row'>
        <td className='row-element first-element' key={1}>
          <InputBorderBottom width={'2.9rem'} name='products.quantityField1' register={register} />
        </td>
        <td className='row-element' key={2}>
          <InputBorderBottom name='products.productField1' register={register} />
        </td>
        <td className='row-element' key={3}>
          <InputBorderBottom name='products.detailField1' register={register} />
        </td>
        { !isQuote ? (
          <td className='row-element' key={4}>
            <InputBorderBottom showDollarSign={true} name='products.totalField1' register={register} />
          </td>
        ) : null }
      </tr>
    )
  ]);


  const createHeader = (header: Array<{ name: string, width: string }>) => (
    <thead className='bill-table-header-wrapper'>
      <tr className='bill-table-header'>
        {
          header.map((element: { name: string, width: string }, index: number) => (
            <th 
              key={index} 
              style={{ width: element.width }}
              className='header-element'
            >
              {element.name}
            </th>
          ))
        }
      </tr>
    </thead>
  );
  
  const addRowProcess = () => {
    const row = (
      <tr key={numberOfRows + 1} className='row'>
        <td className='row-element first-element' key={1}>
          <InputBorderBottom width={'2.9rem'} name={`products.quantityField${numberOfRows + 1}`} register={register} />
        </td>
        <td className='row-element' key={2}>
          <InputBorderBottom name={`products.productField${numberOfRows + 1}`} register={register} />
        </td>
        <td className='row-element' key={3}>
          <InputBorderBottom name={`products.detailField${numberOfRows + 1}`} register={register} />
        </td>
        { !isQuote ? (
          <td className='row-element' key={4}>
            <InputBorderBottom showDollarSign={true} name={`products.totalField${numberOfRows + 1}`} register={register} />
          </td>
        ) : null }
      </tr>
    );
    addRow([ ...rows, row ]);
    setNumberOfRows(numberOfRows + 1);
  };

  return (
    <table className='bill-table'>
      {createHeader(header)}
      <tbody className='bill-table-body-wrapper'>
        { rows }
      </tbody>
      <div className='add-icon' onClick={addRowProcess}>
        <img src={addIcon} alt=''/>
      </div>
    </table>
  );
}

export default BillTable;