import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { loadTickets } from "../../actions";
import { connect } from "react-redux";
import SectionOne from "./sectionOne";

class Home extends Component {
  state = {};
  componentDidMount () {
    this.props.loadTickets();
  }
  render() {
    return (
      <div>
        <SectionOne />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets.tickets,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
   {
    loadTickets,
   },
   dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);