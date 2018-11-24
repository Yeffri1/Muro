import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div class="sign-up-form">
                <h3 class="tittle">Registration <i class="glyphicon glyphicon-file"></i></h3>
                <p>Having hands on experience in creating innovative designs,I do offer design
                   solutions which harness</p>
                <div class="sign-up">
                    <h3 class="tittle reg">Personal Information <i class="glyphicon glyphicon-user"></i></h3>
                    <div class="sign-u">
                        <div class="sign-up1">
                            <h4 class="a">First Name* :</h4>
                        </div>
                        <div class="sign-up2">
                            <form>
                                <input type="text" class="text" />
                            </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="sign-u">
                        <div class="sign-up1">
                            <h4 class="b">Last Name* :</h4>
                        </div>
                        <div class="sign-up2">
                            <form>
                                <input type="text" class="text" />

                            </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="sign-u">
                        <div class="sign-up1">
                            <h4 class="c">Email Address* :</h4>
                        </div>
                        <div class="sign-up2">
                            <form>
                                <input type="text" class="text" />

                            </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <h3 class="tittle reg">Login Information <i class="glyphicon glyphicon-off"></i></h3>
                    <div class="sign-u">
                        <div class="sign-up1">
                            <h4 class="d">Password* :</h4>
                        </div>
                        <div class="sign-up2">
                            <form>
                                <input type="password" class="Password" />

                            </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="sign-u">
                        <div class="sign-up1">
                            <h4>Confirm Password* :</h4>
                        </div>
                        <div class="sign-up2">
                            <form>
                                <input type="password" class="Password" />
                            </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <form>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}


export default Register