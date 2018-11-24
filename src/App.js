import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router

} from 'react-router-dom'
import Layout from './Layout';
import login from './Login';
import register from './Register';


class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Route exact path='/' />
          <Route path='/Login' component={login} />
          <Route path='/Register' component={register} />
          <Route path='/counter' component={Counter} />

        </Router>

      </Layout>
    );
  }
}

export default App;
