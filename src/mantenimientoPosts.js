import React, { Component } from 'react'

export default class MantPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.guardarPost = this.guardarPost.bind(this);
    }
    guardarPost = (evt) => {

    };
    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div className="sign-up">
                <h3 className="tittle reg">Personal Information <i className="glyphicon glyphicon-user"></i></h3>
                <div className="sign-u">
                    <div className="sign-up1">
                        <h4 className="a">First Name* :</h4>
                    </div>
                    <div className="sign-up2">
                        <form>
                            <input type="text" name='firstName' onChange={this.handleChange} className="text" />
                        </form>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="sign-u">
                    <div className="sign-up1">
                        <h4 className="b">Last Name* :</h4>
                    </div>
                    <div className="sign-up2">
                        <form>
                            <textarea name='lastName' onChange={this.handleChange} className="text" >
                            </textarea>
                        </form>
                    </div>
                    <div className="clearfix"> </div>
                </div>

                <form onSubmit={this.guardarUsuario}>
                    <input type="submit" value='Save' />
                </form>
            </div>
        );
    }

}