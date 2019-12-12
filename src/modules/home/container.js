import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { loadGames } from "../../actions";
import { connect } from "react-redux";
import SectionOne from "./sectionOne";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <SectionOne />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.home.games
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
   {
     loadGames,
   },
   dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);