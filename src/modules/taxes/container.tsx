import { Card, Table } from 'components';
import React, { Component } from 'react';
import { Button, Select, Toggle } from '../../atoms';
import { header, options, rows } from './constants';
import moneyIcon from '../../images/taxes/money.svg';
import bankruptIcon from '../../images/dashboard/bankrupt.svg';

import './container.scss';

interface Props {} 

interface State {
  currentPage: number;
  totalPages: number;
}

class Taxes extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 10,
    }
  }

  render() {
    return (
      <div className='taxes-wrapper'>
        <div className='top-actions'>
          <Select 
            defaultOption={'CUATRIMESTRE 1 - 2020'}
            options={options}
          />
          <Toggle />
          <Button 
            copy='DESCARGAR FACTURAS'
            type='primary'
          />
        </div>
        <div className='taxes-content'>
        <div className='cards'>
          <Card 
            icon={moneyIcon}
            title='De iva nos deben pagar'
            value={'13.000.000'}
            color={'green'}
          />
          <Card
            icon={bankruptIcon}
            title='por retefuente debemos pagar'
            value={'350.000'}
            color={'red'}
          />
        </div>
        <div className='table-wrapper'>
          <Table 
            header={header}
            rows={rows}
            showActionsColumn={false}
            changeCurrentPage={this.changeCurrentPage}
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
          />
        </div>
      </div>
      </div>
    );
  }

  private readonly changeCurrentPage = (nextPage: number) => {
    this.setState({ currentPage: nextPage });
    console.log('change current page', nextPage);
  }
}

export default Taxes;