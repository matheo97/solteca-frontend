import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parking from 'types';

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
          <div className='upload-file'>
            upload-file
          </div>
          <div className='graph'>
            graph 
          </div>
        </div>
        <div className='cards-container'>
          <div className='card debt'>
            card debt
          </div>
          <div className='card pending'>
            card peding
          </div>
          <div className='card iva'>
            card iva
          </div>
          <div className='card available'>
            card available
          </div>
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