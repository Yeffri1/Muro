import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
export default class Menus extends Component {
    render() {
        return (
            <Router>
                <div className="top-header">
                    <ul className="cl-effect-16 top-nag">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Login" data-hover="Login">Login</Link></li>
                        <li><Link to="/Register" data-hover="Registration">Registration</Link></li>
                    </ul>
                    <div className="search-box">
                        <div className="b-search">
                            <form>
                                <input type="text" />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </Router>

        );
    }
}
