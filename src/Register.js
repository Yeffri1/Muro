import React, { Component } from 'react'
import configApp from './configuracion'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmpassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    };
 
    render() {
        return (
            <form method='post' action={configApp.httpRequests.registrarUsuario}>
                <div className="sign-up-form">
                    <h3 className="tittle">Registration <i className="glyphicon glyphicon-file"></i></h3>
                    <p>Having hands on experience in creating innovative designs,I do offer design
                   solutions which harness</p>
                    <div className="sign-up">
                        <h3 className="tittle reg">Personal Information <i className="glyphicon glyphicon-user"></i></h3>
                        <div className="sign-u">
                            <div className="sign-up1">
                                <h4 className="a">First Name* :</h4>
                            </div>
                            <div className="sign-up2">
                                <input type="text" name='firstName' onChange={this.handleChange} className="text" />
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="sign-u">
                            <div className="sign-up1">
                                <h4 className="b">Last Name* :</h4>
                            </div>
                            <div className="sign-up2">
                                <input type="text" name='lastName' onChange={this.handleChange} className="text" />

                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="sign-u">
                            <div className="sign-up1">
                                <h4 className="c">Email Address* :</h4>
                            </div>
                            <div className="sign-up2">
                                <input type="text" name='email' onChange={this.handleChange} className="text" />
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <h3 className="tittle reg">Login Information <i className="glyphicon glyphicon-off"></i></h3>
                        <div className="sign-u">
                            <div className="sign-up1">
                                <h4 className="d">Password* :</h4>
                            </div>
                            <div className="sign-up2">
                                <input type="password" name='password' onChange={this.handleChange} className="Password" />

                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <input type="submit" value = "Save"  />
                    </div>
                </div>
            </form>
        );
    }
}


export default Register