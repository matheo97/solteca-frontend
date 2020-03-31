import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { AnyAction } from 'redux';
import Parking from 'types';

interface Props {
  activeTickets: Parking.Ticket[];
  oldTickets: Parking.Ticket[];
} 

interface State {
  testingString: string;
}
class VehicleGettingOut extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      testingString: 'VehicleGettingOut',
    }
  }
  render() {
    return (
      <div className='section-title'>
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
)(VehicleGettingOut);