import React, { Component } from 'react';
import { Button, Checkbox, Input, Select } from '../../atoms';
import { Table } from '../../components';
import { options, header, rows } from './constants';

import './container.scss';

interface Props {} 

interface State {
  inputSearch: string;
  checkPaid: boolean;
  checkQuote: boolean;
}

class Purchases extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputSearch: '',
      checkPaid: false,
      checkQuote: false,
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
                height={5}
                width={20}
              />
              <Button 
                copy='NUEVA COTIZACION'
                type='primary'
                height={5}
                width={20}
              />
            </div>
          </div>
        </div>
        <div className='content'>
          <Table 
            header={header}
            rows={rows}
          />
        </div>
      </div>
    );
  }

  private readonly onChangePaidCheckbox = () => {
    this.setState({ checkPaid: !this.state.checkPaid });
  }

  private readonly onChangeQuoteCheckbox = () => {
    console.log('before Quote: ', this.state.checkQuote);
    this.setState({ checkQuote: !this.state.checkQuote }, () => console.log('after Quote: ', this.state.checkQuote));
  }

  private readonly onChangeSearchBar = () => {
    console.log('update state variable in dashboard');
  }
}

export default Purchases;