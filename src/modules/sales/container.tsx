import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { AnyAction } from 'redux';
import Parking from 'types';

interface Props {} 

interface State {}

class Sales extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='section-title'>
        Sales
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
)(Sales);