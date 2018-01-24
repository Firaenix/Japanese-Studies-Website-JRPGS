import './index.less';
import './styles/fonts/chronotype/webfont.css';
import './typings/modules';
import 'core-js';
import 'promise-polyfill';
import 'raf/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './App';

ReactDOM.render(
  <div className="container">
    <App />
  </div>,
  document.getElementById('root')
);
