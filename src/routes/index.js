import React from 'react';
/* import AuthRoute from './authRoute'; */
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Modal } from 'antd';

/* import App from '../modules/app'; */
import * as modules from '../modules';

let window;

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
    {/* <App history={history}> */}
    <Switch>
      <Route path='/' component={modules.Home} />
    </Switch>
{/*     </App> */}
  </Router>
);

export default GamingRouter;