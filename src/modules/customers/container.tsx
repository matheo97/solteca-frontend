import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parking from 'types';

interface Props {} 

interface State {}

class Customers extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='section-title'>
        Customers
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
)(Customers);