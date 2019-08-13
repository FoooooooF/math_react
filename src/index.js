import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, Link } from 'react-router-dom'
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'
import Index from './views/index';
import About from './views/about';

ReactDOM.render(<HashRouter >
        <Route exact path='/' component={Index} />
        <Route path="/about" component={About}/>
  </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
