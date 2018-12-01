import React, { Component } from 'react'
export default class SideBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="col-md-3 top-nav">
                <div className="logo">
                    <a href="index.html"><h1>Muro</h1></a>
                </div>
                <div className="top-menu">
                    <span className="menu"> </span>

                    <ul className="cl-effect-16">
                       
                        <li><a className="active" href="/ManagerPosts" data-hover="H-OME">Home</a></li>
                        <li><a href="about.html" data-hover="About">About</a></li>
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
        );
    }
}

