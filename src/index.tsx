import React from 'react';
import ReactDOM from 'react-dom';

import './components/Header.css';
import { Header } from './components/Header';

import './components/Middle.css';
import { Middle } from './components/Middle';

import './components/Newslatter.css';
import { Newslatter } from './components/Newslatter';

import './components/Footer.css';
import { Footer } from "./components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Middle />
    <Newslatter />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
