import React, { Component } from 'react'
export default class Login extends Component {
    render() {
        debugger;
        return (
            <div class="login">
                <div class="login-grids">
                    <div class="col-md-6 log">
                        <h3 class="tittle">Login <i class="glyphicon glyphicon-lock"></i></h3>
                        <p>Welcome, please enter the following to continue.</p>
                        <p>If you have previously Login with us, <a href="/">click here</a></p>
                        <form>
                            <h5>User Name:</h5>
                            <input type="text" />
                            <h5>Password:</h5>
                            <input type="password" />
                            <input type="submit" />

                        </form>
                    </div>
                
                    <div class="clearfix"></div>
                </div>
            </div>
        );
    }
}