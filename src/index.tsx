import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import { Header } from './Header'

import './Middle.css';
import { Middle } from './Middle'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Middle />
  </React.StrictMode>,
  document.getElementById('root')
);
