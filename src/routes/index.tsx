import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Modal } from 'antd';
import Parking from '../types';

import App from '../modules/app/container';
import * as modules from '../modules';

declare let window: Parking.CustomWindow;

const history = createBrowserHistory({
  getUserConfirmation(message, cb) {
    if (Boolean(message)) {
      Modal.confirm({
        title: message,
        okText: 'Discard',
        onOk: () => {
          cb(true);
        },
        onCancel: () => {
          cb(false);
        },
      });
    } else {
      cb(true);
    }
  },
});

history.listen((location) => {
  if (window.analytics !== undefined) {
    window.analytics.page(`${location.pathname}${location.search}${location.hash}`);
  }
});

const GamingRouter = () => (
  <Router history={history}>
    <App history={history}>
      <Switch>
        <Route path='/getting-in' component={modules.VehicleGettingIn} />
        <Route path='/getting-out' component={modules.VehicleGettingOut} />
        <Route path='/tickets' component={modules.Tickets} />
      </Switch>
    </App>
  </Router>
);

export default GamingRouter;