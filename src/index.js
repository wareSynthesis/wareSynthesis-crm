import React from 'react';
import ReactDOM from 'react-dom';

import { authInfoSuccess } from './redux/reducers/auth.duck';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import firebase from './firebase-config';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import configureStore from './store';
import Routes from './Routes';
import routeConfiguration from './routeConfiguration';

const store = configureStore({}, firebase);

document.title = 'wareSynthesis CRM'

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(authInfoSuccess(user));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes routes={routeConfiguration()}/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
});
