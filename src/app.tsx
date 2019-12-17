import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import GamingRouter from './routes/index';
import configureStore from './shared/setup/store';

const reduxStore = configureStore;

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <GamingRouter />
      </ReduxProvider>
    );
  }
}

export default App;
