import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { AnyAction } from 'redux';
import Parking from 'types';

interface Props {} 

interface State {}

class Purchases extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        Purchases
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
)(Purchases);