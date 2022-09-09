import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Home from './Home';
import reducer from './reducer';
import { createStore } from 'redux'
import SocketHome from './SocketHome';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <Home /> */}
    <SocketHome />
  </Provider>,
  document.getElementById('root')
);