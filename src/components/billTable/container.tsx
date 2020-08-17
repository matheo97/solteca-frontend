import React, { useState } from 'react';
import addIcon from '../../images/bill-table/add-icon.svg';
import { InputBorderBottom } from 'atoms';
import './container.scss';

interface Props {
  header: Array<{ name: string, width: string }>;
  register: any;
};

const BillTable = (props: Props) => { 
  const [ numberOfRows, setNumberOfRows ] = useState(1);
  const [ rows, addRow ] = useState([
    (
      <tr key={1} className='row'>
        <td className='row-element first-element' key={1}>
          <InputBorderBottom width={'2.9rem'} name='quantity-1' register={props.register} />
        </td>
        <td className='row-element' key={2}>
          <InputBorderBottom name='product-1' register={props.register} />
        </td>
        <td className='row-element' key={3}>
          <InputBorderBottom name='detail-1' register={props.register} />
        </td>
        <td className='row-element' key={4}>
          <InputBorderBottom showDollarSign={true} name='total-1' register={props.register} />
        </td>
      </tr>
    )
  ]);


  const createHeader = (props: Props) => (
    <thead className='bill-table-header-wrapper'>
      <tr className='bill-table-header'>
        {
          props.header.map((element: { name: string, width: string }, index: number) => (
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
          <InputBorderBottom width={'2.9rem'} name={`quantity-${numberOfRows + 1}`} register={props.register} />
        </td>
        <td className='row-element' key={2}>
          <InputBorderBottom name={`product-${numberOfRows + 1}`} register={props.register} />
        </td>
        <td className='row-element' key={3}>
          <InputBorderBottom name={`detail-${numberOfRows + 1}`} register={props.register} />
        </td>
        <td className='row-element' key={4}>
          <InputBorderBottom showDollarSign={true} name={`total-${numberOfRows + 1}`} register={props.register} />
        </td>
      </tr>
    );
    addRow([ ...rows, row ]);
    setNumberOfRows(numberOfRows + 1);
  };

  return (
    <table className='bill-table'>
      {createHeader(props)}
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