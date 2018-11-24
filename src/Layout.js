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
import { Menus } from './Menu';


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
                            <div className="banner">
                                <div className="callbacks_container">
                                    <ul className="rslides" id="slider4">
                                        <li>
                                            <img src="images/1.jpg" className="img-responsive" alt="" />

                                        </li>
                                        <li>
                                            <img src="images/2.jpg" className="img-responsive" alt="" />


                                        </li>
                                        <li>
                                            <img src="images/3.jpg" className="img-responsive" alt="" />


                                        </li>
                                        <li>
                                            <img src="images/3.jpg" className="img-responsive" alt="" />


                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"> </div>
                                <div className="b-bottom">
                                    <h5 className="top"><a href="single.html">What turn out consetetur sadipscing elit</a></h5>
                                    <p>On Aug 25 <a className="span_link" href><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                                </div>
                            </div>
                            <ListaPosts />
                        </div>
                        <div className="banner-right-text">
                            <h3 className="tittle">News  <i className="glyphicon glyphicon-facetime-video"></i></h3>
                            <div className="general-news">
                                <div className="general-inner">
                                    <div className="general-text">
                                        <a href="single.html"><img src="images/gen1.jpg" className="img-responsive" alt="" /></a>
                                        <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
                                        <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                                        <p>On Jun 25 <a className="span_link" href><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                                    </div>
                                    <div className="edit-pics">
                                        <div className="editor-pics">
                                            <div className="col-md-3 item-pic">
                                                <img src="images/f4.jpg" className="img-responsive" alt="" />

                                            </div>
                                            <div className="col-md-9 item-details">
                                                <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                                                <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="editor-pics">
                                            <div className="col-md-3 item-pic">
                                                <img src="images/f1.jpg" className="img-responsive" alt="" />

                                            </div>
                                            <div className="col-md-9 item-details">
                                                <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                                                <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="editor-pics">
                                            <div className="col-md-3 item-pic">
                                                <img src="images/f1.jpg" className="img-responsive" alt="" />

                                            </div>
                                            <div className="col-md-9 item-details">
                                                <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                                                <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="editor-pics">
                                            <div className="col-md-3 item-pic">
                                                <img src="images/f4.jpg" className="img-responsive" alt="" />

                                            </div>
                                            <div className="col-md-9 item-details">
                                                <h5 className="inner two"><a href="single.html">New iPad App to simulate your Guitar</a></h5>
                                                <div className="td-post-date two"><i className="glyphicon glyphicon-time"></i>Feb 22, 2015 <a href="#"><i className="glyphicon glyphicon-comment"></i>0 </a></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <h3 className="tittle media">Media <i className="glyphicon glyphicon-floppy-disk"></i></h3>
                                        <div className="general-text two">
                                            <a href="single.html"><img src="images/gen3.jpg" className="img-responsive" alt="" /></a>
                                            <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
                                            <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                                            <p>On Jun 27 <a className="span_link" href><span className="glyphicon glyphicon-comment"></span>0 </a>
                                            <a className="span_link" href><span className="glyphicon glyphicon-eye-open"></span>56 </a>
                                            <a className="span_link" href><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                                        </div>
                                    </div>
                                    <div className="general-text two">
                                        <a href="single.html"><img src="images/gen2.jpg" className="img-responsive" alt="" /></a>
                                        <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
                                        <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                                        <p>On Jun 27 <a className="span_link" href><span className="glyphicon glyphicon-comment"></span>0 </a>
                                        <a className="span_link" href><span className="glyphicon glyphicon-eye-open"></span>56 </a>
                                        <a className="span_link" href><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        <Footer />
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>

                <a href="#home" id="toTop" className="scroll" >
                    <span id="toTopHover" > </span></a>
            </div>
        );
    }
}

