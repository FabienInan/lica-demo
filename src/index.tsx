import './index.scss';

import * as moment from 'moment';

import App from './App';
import { GlobalStyle }  from './styles/global';
import React from 'react';
import ReactDOM from 'react-dom';

moment.locale('fr');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
