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
    guardarUsuario = () => {
       // debugger;
        let objeto = this.state;
        let usuario = {
            firstName: objeto.firstName,
            lastName: objeto.lastName,
            email: objeto.email,
            password: objeto.password,
            confirmpassword: objeto.confirmpassword
        };
      
        fetch(configApp.httpRequests.registrarUsuario, { method: 'POST', body: JSON.stringify(usuario) })
            .then((response) => {
                response = response || {};
                if (response.ok) {
                    return response.json();
                }
                alert(response.message);
            }).then((resultado) => {
                resultado = resultado || {};
                if (resultado.Error == 0) {
                    alert('Agregado')
                }
                else {
                    alert('Error ' + resultado.msg);
                }
            });


    }

    render() {

        return (
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
                                <input type="text" name='lastName' onChange={this.handleChange} className="text" />

                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="sign-u">
                        <div className="sign-up1">
                            <h4 className="c">Email Address* :</h4>
                        </div>
                        <div className="sign-up2">
                            <form>
                                <input type="text" name='email' onChange={this.handleChange} className="text" />
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <h3 className="tittle reg">Login Information <i className="glyphicon glyphicon-off"></i></h3>
                    <div className="sign-u">
                        <div className="sign-up1">
                            <h4 className="d">Password* :</h4>
                        </div>
                        <div className="sign-up2">
                            <form>
                                <input type="password" name='password' onChange={this.handleChange} className="Password" />

                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="sign-u">
                        <div className="sign-up1">
                            <h4>Confirm Password* :</h4>
                        </div>
                        <div className="sign-up2">
                            <form>
                                <input type="password" name='confirmpassword' onChange={this.handleChange} className="Password" />
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <form onSubmit={this.guardarUsuario}>
                        <input type="submit" value='Save' />
                    </form>
                </div>
            </div>
        );
    }
}


export default Register