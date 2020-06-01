import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parking from 'types';
import { Card } from '../../components';
import Graph from './graph';
import bankrupt from '../../images/dashboard/bankrupt.svg';
import earnings from '../../images/dashboard/earnings.svg';
import media from '../../images/dashboard/media.svg';
import bank from '../../images/dashboard/bank.svg';

import './container.scss';
interface Props {} 

interface State {}

class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='dashboard-wrapper'>
        <div className='upper-container'>
          <div className='graph'>
            <div className='title'>ventas por cuatrimestre:</div>
            <div className='graph-container'>
              <Graph 
                firstQuater={10000000}
                secondQuater={8000000}
                thirdQuater={4000000}
              />
            </div>
          </div>
          <div className='upload-file'>
            upload-file
          </div>
        </div>
        <div className='cards-container'>
          <Card 
            icon={bankrupt}
            title='total adeudado a la fecha'
            value={'13.000.000'}
            color={'red'}
          />
          <Card
            icon={earnings}
            title='dinero que nos deben a la fecha'
            value={'33.000.000'}
            color={'green'}
          />
          <Card 
            icon={media}
            title='liquidacion del iva a la fecha'
            value={'10.000.000'}
            color={'blue'}
            quarter={1}
          />
          <Card 
            icon={bank}
            title='dinero total en cuenta de ahorros'
            value={'2.000.000'}
            color={'green'}
            date={'febrero 21 de 2020'}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: Parking.FullState) => ({
  activeTickets: state.tickets.activeTickets,
  oldTickets: state.tickets.oldTickets,
});

export default connect(
  mapStateToProps
)(Dashboard);