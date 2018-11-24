import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className="top-inner second">
                <div className="col-md-6 top-text">
                    <a href="single.html"><img src="images/pic3.jpg" className="img-responsive" alt="" /></a>
                    <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
                    <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                    <p>On Jun 25 <a className="span_link" href><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                </div>
                <div className="col-md-6 top-text two">
                    <a href="single.html"><img src="images/pic4.jpg" className="img-responsive" alt="" /></a>
                    <h5 className="top"><a href="single.html">Consetetur sadipscing elit</a></h5>
                    <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                    <p>On Jun 27 <a className="span_link" href><span className="glyphicon glyphicon-comment"></span>0 </a><a className="span_link" href="#"><span className="glyphicon glyphicon-eye-open"></span>56 </a><a className="span_link" href="single.html"><span className="glyphicon glyphicon-circle-arrow-right"></span></a></p>
                </div>
                <div className="clearfix"> </div>
            </div>
        );
    }
}