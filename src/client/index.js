import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import App from './App';

import Reducer from './store/reducers/reducer';

const store = createStore(
  Reducer,
  applyMiddleware(thunk)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
