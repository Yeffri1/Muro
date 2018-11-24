import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import ListaPosts from './ListaPosts';
import SideBar from './SideBar';
import Footer from './Footer';
import Menus  from './Menu';


export default class Layout extends Component {

    render() {
        return (
            <div className="h-top" id="home">
                <Menus />
                <div className="full">
                    <SideBar />
                    <div className="col-md-9 main">
                        <div className="banner-section">
                            <h3 className="tittle">General <i className="glyphicon glyphicon-picture"></i></h3>
                          
                        </div>
                        <ListaPosts />
                      
                        <div className="clearfix"> </div>
                        <div className="clearfix"> </div>
                        <Footer />
                    </div>
                    <div className="clearfix"> </div>
                </div>

                <a href="#home" id="toTop" className="scroll" >
                    <span id="toTopHover" > </span></a>
            </div>
        );
    }
}

