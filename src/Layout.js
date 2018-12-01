import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import SideBar from './SideBar';
import ManagerPosts from './ManagerPosts';
import MantPost from './MantPost';
import configApp from './configuracion'

export default class Layout extends Component {

    constructor(prop) {
        super(prop);
        this.logout = this.logout.bind(this);
    }
    logout = () => {
        fetch(configApp.httpRequests.logout, { method: 'get' });
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="h-top" id="home">
                        <div className="top-header">
                            <ul className="cl-effect-16 top-nag">
                                <li><Link to="/ManagerPosts">Home</Link></li>
                                <li><Link to='/Register' data-hover="Registration">Registration</Link></li>
                                <li><Link to='/MantPost' data-hover="Crear Post">Crear Post</Link></li>
                                <li><Link to='/Login' data-hover="Login">Login</Link></li>
                                <li><a href='/'  onClick={this.logout} data-hover="Logout">Log out</a></li>

                            </ul>
                            <div className="search-box">
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="full">

                        <SideBar />

                        <div className="col-md-9 main">
                            <Switch>
                                <Route path='/ManagerPosts' component={ManagerPosts} />
                                <Route path='/Login' component={Login} />
                                <Route path='/Register' component={Register} />
                                <Route path='/MantPost' component={MantPost} />

                            </Switch>
                            <div className="clearfix"> </div>


                        </div>

                        <div className="clearfix"> </div>
                    </div>
                    <a href="#home" id="toTop" className="scroll" >
                        <span id="toTopHover"> </span></a>
                </div>

            </Router>

        );
    }
}

