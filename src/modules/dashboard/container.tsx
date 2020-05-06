import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parking from 'types';

interface Props {} 

interface State {}

class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        Dashboard
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