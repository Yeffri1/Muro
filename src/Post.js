import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'
export default class Post extends Component {
    render() {
        let data = this.props.post;
        return (
            <div className="col-md-6 top-text">
                <Link to='/SinglePost' data-hover={data.titulo || 'N/A'}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_u5njzgYEw_mMPsY9IGhHJU_cbNYNj63mC_kDfzQLO8Dxgwaww" className="img-responsive" alt="" />
                </Link>
                <h5 className="top"><a href='/'>{data.titulo}</a></h5>
                <p>
                    {data.post}
                </p>
                <p>On fecha <a className="span_link" href='/'>
                    <span className="glyphicon glyphicon-comment"></span>0 </a>
                    <a className="span_link" href='/'>
                        <span className="glyphicon glyphicon-eye-open"></span>56
                    </a>
                    <a className="span_link" href='/'>
                        <span className="glyphicon glyphicon-circle-arrow-right"></span>
                    </a>
                </p>
            </div>
        );
    }
}