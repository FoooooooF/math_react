import React from 'react';
// 使用 ES6 的转译器，如 babel
import { Router, Route, Link } from 'react-router'
// import logo from './logo.svg';
// import './App.css';
import index from './views/index'

function App() {
  return (
    <Router>
    <Route path="/" component={index}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
  );
}

export default App;
