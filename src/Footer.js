import React, { Component } from 'react'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="footer-top">
                        <div className="col-md-4 footer-grid">
                            <h4>Lorem sadipscing </h4>
                            <ul className="bottom">
                                <li>Consetetur sadipscing elitr</li>
                                <li>Magna aliquyam eratsed diam</li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-grid">
                            <h4>Message Us Now</h4>
                            <ul className="bottom">
                                <li><i className="glyphicon glyphicon-home"></i>Available 24/7 </li>
                                <li><i className="glyphicon glyphicon-envelope"></i><a href="mailto:info@example.com">mail@example.com</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-grid">
                            <h4>Address Location</h4>
                            <ul className="bottom">
                                <li><i className="glyphicon glyphicon-map-marker"></i>2901 Glassgow Road, WA 98122-1090 </li>
                                <li><i className="glyphicon glyphicon-earphone"></i>phone: (888) 123-456-7899 </li>
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="copy">
                    <p>&copy; 2016 Blogger. All Rights Reserved | Design by <a href="http://w3layouts.com/">W3layouts</a> </p>
                </div>
            </div>

        );
    }
}


