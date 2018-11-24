import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import Layout from './Layout';
import Login from './Login';
import Register from './Register';


class App extends Component {
  render() {
    return (
       <Layout>
           <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
       </Layout>
    );
  }
}

export default App;
