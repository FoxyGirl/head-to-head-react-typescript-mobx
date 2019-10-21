import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './js/App';
import './scss/app.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';

import ViewStore from './js/stores/ViewStore';

const viewStore = new ViewStore();
const stores = {
  viewStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <App viewStore={viewStore} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
