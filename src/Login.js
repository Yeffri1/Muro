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
    // loguear = () =>{
    //     fetch(configApp.httpRequests.loginUsuario, { method: 'GET' }).then((response) => {
    //         return response.json();
    //     }).then((resultado) => {
    //         if(resultado.auth === true){
    //             sessionStorage.setItem('tokenUsuario',resultado.token);
    //         }
    //         console.log(resultado);
    //     });
    // }
 

    render() {
        return (
            <div className="login">
                <div className="login-grids">
                    <div className="col-md-6 log">
                        <h3 className="tittle">Login <i className="glyphicon glyphicon-lock"></i></h3>
                        <p>Bienvenido, Favor Digitar sus datos</p>
                        <p>If you have previously Login with us, <a href="/">click here</a></p>
                        <form method="post" action={configApp.httpRequests.loginUsuario}>
                            <h5>User Name:</h5>
                            <input type="text" name='usuario' />
                            <h5>Password:</h5>
                            <input type="password" name='clave' />
                            <input type='submit' value='Login' />
                        </form>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}