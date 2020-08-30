import React, { Component } from 'react';
import { Button, Checkbox, Input, Select } from '../../atoms';
import { Table, Modal, Bill } from '../../components';
import { options, header, rows } from './constants';

import './container.scss';

interface Props {} 

interface State {
  inputSearch: string;
  checkPaid: boolean;
  checkQuote: boolean;
  currentPage: number;
  showBill: boolean;
  totalPages: number;
  type: 'purchase' | 'sells';
  isQuote: boolean;
  action: 'create' | 'edit' | 'show';
}

class Purchases extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputSearch: '',
      checkPaid: false,
      checkQuote: false,
      currentPage: 1,
      showBill: false,
      totalPages: 10,
      type: 'purchase',
      action: 'create',
      isQuote: false,
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
                onClick={() => this.showModal('purchase', 'create', false)}
              />
              <Button 
                copy='NUEVA COTIZACION'
                type='primary'
                onClick={() => this.showModal('purchase', 'create', true)}
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
        
        {/* All Bill and Quote actions */}
        <Modal
          show={this.state.showBill}
        >
          <Bill 
            hideModal={this.hideModal}
            type={this.state.type}
            action={this.state.action}
            isQuote={this.state.isQuote}
            showModal={this.showModal}
          />
        </Modal> 
      </div>
    );
  }

  private readonly onChangePaidCheckbox = () => {
    this.setState({ checkPaid: !this.state.checkPaid });
  }

  private readonly showModal = (
    type: 'purchase' | 'sells', 
    action: 'create' | 'edit' | 'show',
    isQuote: boolean,
    ) => {
    this.setState({ 
      showBill: true, 
      type,
      action,
      isQuote,
    });
  }

  private readonly hideModal = () => {
    this.setState({ showBill: false });
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