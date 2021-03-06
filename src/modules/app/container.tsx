import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from '@reach/router';
import { loadTickets } from '../../actions/index';
import Sidebar from './sideBar/sideBar';
import './container.scss';
import Solteca from 'types';
interface Props extends RouteComponentProps {
  history: any;
  children: any;
  loadTickets(): void;
}

interface State {
  example: string;
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      example: 'example',
    };
  }

  public componentDidMount() {
    this.props.loadTickets();
  }

  public render() {
    return (
      <div className="admin-layout-component">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="admin-layout-container">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = (_state: Solteca.FullState) => ({
  // bootstrapping: state.user.bootstrapping,
  // confirmExit: state.ui.confirmExit,
  // isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadTickets,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
