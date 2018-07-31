import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);