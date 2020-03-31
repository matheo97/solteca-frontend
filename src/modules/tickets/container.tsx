import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parking from 'types';

interface Props {
  activeTickets: Parking.Ticket[];
  oldTickets: Parking.Ticket[];
} 

interface State {
  testingString: string;
}
class Ticket extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      testingString: 'Ticket',
    }
  }
  render() {
    return (
      <div>
        {this.state.testingString}
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
)(Ticket);