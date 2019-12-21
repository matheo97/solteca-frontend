import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from '@reach/router';
// import { Loading } from '../../components';
import { loadTickets } from '../../actions/index';
import Parking from 'types';

interface Props extends RouteComponentProps {
  history: any;
  children: any;
  loadTickets(): void;
}

interface State {
  example: string;
}
class App extends Component<Props, State> {
  // private unblocker: any;
  // private unlisten: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      example: 'example',
    }
    // this.unblocker = this.props.history.block((location: any, action: string) => {
    //   if (action === 'POP' && this.props.confirmExit) {
    //     return 'Would you like to discard unsaved changes?';
    //   }
    // });
    // // Upon all the transitions, unlock the form
    // this.unlisten = this.props.history.listen(() => {
    //   this.props.unlockForm();
    // });
  }

  public componentDidMount() {
    this.props.loadTickets();
    // sdk.onAuthStateChanged(async () => {
    //   if (!this.props.signingUp) {
    //     
    //   }
    //   if (this.props.isAuth) {
    //     
    //   }
    // });
  }

  public componentWillUnmount() {
    // this.unblocker();
    // this.unlisten();
  }

  public render() {
    const { children } = this.props;

    // if (bootstrapping) {
    //   return <Loading />;
    // }

    return children;
  }
}

const mapStateToProps = (_state: Parking.FullState) => ({
  // bootstrapping: state.user.bootstrapping,
  // confirmExit: state.ui.confirmExit,
  // isAuth: state.user.isAuth,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadTickets,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
