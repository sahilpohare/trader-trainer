import React, {Component} from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';

import {Provider} from 'react-redux';
import {store} from './StateManagement/store';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {i} from './StateManagement/actions/stockDataActions'
import './App.css';

export default class App extends Component {
  componentWillMount(){
  }
  render() {
    return (
      <Provider store={store}>
          <Router className="App">
            <Route exact path='/' component = {HomePage}></Route>
            <Route exact path='/Login' component = {LoginPage}></Route>
            <Route exact path='/Dashboard' component = {Dashboard}></Route>
          </Router>
      </Provider>
      );
  }
}

