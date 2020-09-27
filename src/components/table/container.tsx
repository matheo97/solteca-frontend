import React, { Component } from 'react';
import ActionCol from './actionCol';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

import './container.scss';

interface Props {
  currentPage: number;
  header: Array<{ name: string, width: string }>;
  rows: Array<any>;
  showActionsColumn: boolean;
  totalPages: number;
  changeCurrentPage(nextPage: number): void;
};

interface State {};

class Table extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }

  private readonly createHeader = () => (
    <thead className='table-header-wrapper'>
      <tr className='table-header'>
        {
          this.props.header.map((element: { name: string, width: string }, index: number) => (
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

  private readonly createRows = () => (
    <tbody className='table-body-wrapper'>
      {
        this.props.rows.map((row, index: number) => (
          <tr 
            key={index} 
            className={`row ${row.paid ? 'green' : 'red'}`}  
            onClick={() => console.log('all row clicked')}>
            {
              Object.keys(row).map((key: string, index: number) => (
                <td 
                  className={`row-element ${index === 0 ? 'first-element' : ''}`} 
                  key={index}
                >
                  { key === 'paid' && this.props.showActionsColumn ? (
                      <ActionCol 
                        paid={row[key]}
                      /> 
                    ) : row[key] }
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  );

  private readonly pagination = () => (
    <div className='pagination-wrapper'>
      <Pagination
        changeCurrentPage={this.props.changeCurrentPage}
        currentPage={this.props.currentPage}
        totalPages={this.props.totalPages}
        theme='square-fill'
      />
    </div>
  );

  render() {
    return (
      <table className='table'>
        {this.createHeader()}
        {this.createRows()}
        {this.pagination()}
      </table>
    );
  }
}

export default Table;