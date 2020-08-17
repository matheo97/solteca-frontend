import React, { Component } from 'react';
import { Button, Checkbox, Input, Select } from '../../atoms';
import { Table, Modal, CreateBill } from '../../components';
import { options, header, rows } from './constants';

import './container.scss';

interface Props {} 

interface State {
  inputSearch: string;
  checkPaid: boolean;
  checkQuote: boolean;
  currentPage: number;
  showModal: boolean;
  totalPages: number;
}

class Purchases extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputSearch: '',
      checkPaid: false,
      checkQuote: false,
      currentPage: 1,
      showModal: true,
      totalPages: 10,
    }
  }

  render() {
    return (
      <div className='purchases-wrapper'>
        <div className='header'>
          <Input 
            onChange={this.onChangeSearchBar} 
            width={'inherit'} 
            placeholder='Buscar'
          />
          <div className='form-actions'>
            <div className='form'>
              <Checkbox 
                name='no canceladas'
                checked={this.state.checkPaid}
                onChange={this.onChangePaidCheckbox}
              />
              <Checkbox 
                name='cotizaciones'
                checked={this.state.checkQuote}
                onChange={this.onChangeQuoteCheckbox}
              />
              <Select 
                defaultOption={'ultimos 6 meses'}
                options={options}
              />
            </div>
            <div className='actions'>
              <Button 
                copy='NUEVA COMPRA'
                type='terciary'
              />
              <Button 
                copy='NUEVA COTIZACION'
                type='primary'
              />
            </div>
          </div>
        </div>
        <div className='content'>
          <Table 
            header={header}
            rows={rows}
            changeCurrentPage={this.changeCurrentPage}
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
          />
        </div>
        {/* Create Bill */}
        <Modal
          show={this.state.showModal}
        >
          <CreateBill />
        </Modal> 
      </div>
    );
  }

  private readonly onChangePaidCheckbox = () => {
    this.setState({ checkPaid: !this.state.checkPaid });
  }

  private readonly toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  private readonly onChangeQuoteCheckbox = () => {
    console.log('before Quote: ', this.state.checkQuote);
    this.setState({ checkQuote: !this.state.checkQuote }, () => console.log('after Quote: ', this.state.checkQuote));
  }

  private readonly onChangeSearchBar = () => {
    console.log('update state variable in dashboard');
  }

  private readonly changeCurrentPage = (nextPage: number) => {
    this.setState({ currentPage: nextPage });
    console.log('change current page', nextPage);
  }
}

export default Purchases;