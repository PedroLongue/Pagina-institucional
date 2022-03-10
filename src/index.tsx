import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import { Header } from './Header';

import './Middle.css';
import { Middle } from './Middle';

import './Newslatter.css';
import { Newslatter } from './Newslatter';

import './Footer.css';
import { Footer } from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Middle />
    <Newslatter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
