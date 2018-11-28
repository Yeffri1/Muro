import React, { Component } from 'react'
import configApp from './configuracion'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    };

    loginUsuario = () => {
        // debugger;
         let objeto = this.state;
         let usuario = {
             email: objeto.email,
             password: objeto.password
         };
       
         fetch(configApp.usuariosAcciones.loginUsuario, { method: 'POST', body: JSON.stringify(usuario) })
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
            <div className="login">
                <div className="login-grids">
                    <div className="col-md-6 log">
                        <h3 className="tittle">Login <i className="glyphicon glyphicon-lock"></i></h3>
                        <p>Bienvenido, Favor Digitar sus datos</p>
                        <p>If you have previously Login with us, <a href="/">click here</a></p>
                        <form onSubmit={this.loginUsuario}>
                            <h5>User Name:</h5>
                            <input type="text" name='email'  />
                            <h5>Password:</h5>
                            <input type="password" name='password'/>
                            <input type='submit' value='Login' /> 

                        </form>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}