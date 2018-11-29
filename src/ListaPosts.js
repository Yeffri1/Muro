import React, { Component } from 'react'

export default class ListaPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const posts = this.props.posts || [];
        return (
            <div className="top-news">
                <div className="top-inner">
                    <div className="col-md-6 top-text">
                        <a href='/'><img src="./public/images/pic1.jpg" className="img-responsive" alt="" /></a>
                        <h5 className="top"><a href='/'>Consetetur sadipscing elit</a></h5>
                        <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                        <p>On Jun 25 <a className="span_link" href='/'><span className="glyphicon glyphicon-comment"></span>
                            0 </a><a className="span_link" href='/'>
                                <span className="glyphicon glyphicon-eye-open"></span>56 </a>
                            <a className="span_link" href='/'>
                                <span className="glyphicon glyphicon-circle-arrow-right"></span></a>
                        </p>
                    </div>
                    <div className="col-md-6 top-text two">
                        <a href='/'><img src="images/pic2.jpg" className="img-responsive" alt="" /></a>
                        <h5 className="top"><a href='/'>Consetetur sadipscing elit</a></h5>
                        <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam eratsed diam justo duo dolores rebum.</p>
                        <p>On Jun 27 <a className="span_link" href='/'>
                            <span className="glyphicon glyphicon-comment"></span>
                            0 </a><a className="span_link" href='/'>
                                <span className="glyphicon glyphicon-eye-open"></span>56  </a>
                            <a className="span_link" href='/'>
                                <span className="glyphicon glyphicon-circle-arrow-right"></span>
                            </a>
                        </p>
                    </div>
                    <div className="clearfix"> </div>
                    {/*   AQUI VAN LOS POSTS  */}
                    {Object.keys(posts).map((k, i) => {
                        let data = posts[k];
                        return (
                            <h2>{data.post}</h2>
                        );
                    })}
                </div>
            </div>
        );
    }
}