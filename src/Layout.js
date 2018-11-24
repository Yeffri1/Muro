import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import Login from './Login';
import Register from './Register';




export default class Layout extends Component {

    render() {
        return (
            <Router>
                <hijorouter>
                    <div className="h-top" id="home">
                        <div className="top-header">
                            <ul className="cl-effect-16 top-nag">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to='/Login' data-hover="Login">Login</Link></li>
                                <li><Link to='/Register' data-hover="Registration">Registration</Link></li>
                            </ul>
                            <div className="search-box">
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="full">
                        <div className="col-md-3 top-nav">
                            <div className="logo">
                                <a href="index.html"><h1>Muro</h1></a>
                            </div>
                            <div className="top-menu">
                                <span className="menu"> </span>

                                <ul className="cl-effect-16">
                                    <li><a className="active" href="index.html" data-hover="HOME">Home</a></li>
                                    <li><a href="about.html" data-hover="About">About</a></li>
                                    <li><a href="grid.html" data-hover="Grids">Grids</a></li>
                                    <li><a href="services.html" data-hover="Services">Services</a></li>
                                    <li><a href="gallery.html" data-hover="Gallery">Gallery</a></li>
                                    <li><a href="contact.html" data-hover="CONTACT">Contact</a></li>
                                </ul>

                                <ul className="side-icons">
                                    <li><a className="fb" href="#"></a></li>
                                    <li><a className="twitt" href="#"></a></li>
                                    <li><a className="goog" href="#"></a></li>
                                    <li><a className="drib" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9 main">
                            <Switch>
                                <Route path='/Login' component={Login} />
                                <Route path='/Register' component={Register} />
                            </Switch>
                            <div className="clearfix"> </div>
                       
                           
                        </div>
                       
                        <div className="clearfix"> </div>
                    </div>

                    <a href="#home" id="toTop" className="scroll" >
                        <span id="toTopHover"> </span></a>
                </hijorouter>
                
            </Router>

        );
    }
}

