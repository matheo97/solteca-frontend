import React, { Component } from 'react';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

import Row from './row';

import './container.scss';

interface Props {
  currentPage: number;
  header: Array<{ name: string, width: string }>;
  rows: Array<any>;
  showContactsIcon?: boolean;
  totalPages: number;
  changeCurrentPage(nextPage: number): void;
  showDeleteModal(): void;
};

interface State {};

class CompaniesTable extends Component<Props, State> {
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

  private readonly createRows = ({ showDeleteModal, showContactsIcon }: Props) => (
    <tbody className='table-body-wrapper'>
      {
        this.props.rows.map((row, index: number) => (
          <Row 
            row={row}
            index={index}
            showDeleteModal={showDeleteModal}
            showContactsIcon={showContactsIcon}
          />
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
        {this.createRows(this.props)}
        {this.pagination()}
      </table>
    );
  }
}

export default CompaniesTable;