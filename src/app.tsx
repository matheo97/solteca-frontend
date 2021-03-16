import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import SoltecaRouter from './routes/index';
import configureStore from './shared/setup/store';

const reduxStore = configureStore;

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <SoltecaRouter />
      </ReduxProvider>
    );
  }
}

export default App;
