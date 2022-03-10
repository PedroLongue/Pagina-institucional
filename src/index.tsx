import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import { Header } from './Header';

import './Middle.css';
import { Middle } from './Middle';

import './Newslatter.css';
import { Newslatter } from './Newslatter';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Middle />
    <Newslatter />
  </React.StrictMode>,
  document.getElementById('root')
);
