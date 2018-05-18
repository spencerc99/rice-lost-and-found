import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{padding: "100px"}}>
            <div className="container" style={{marginTop: "100px"}}>
            <form>
            <div className="form-group row">
              <label for="email" className="col-2 col-form-label">E-Mail</label>
                <div className="col-6">
                  <input className="form-control" type="text" id="email"/>
                </div>
            </div>
            <div className="form-group row">
              <label for="password" className="col-2 col-form-label">Password</label>
                <div className="col-10">
                  <input className="form-control" type="password" id="password"/>
                </div>
            </div>
            <div className="form-group row col-10">
                <button type="submit" className="btn btn-primary" style={{marginRight: "50px"}}>Login</button>
                <a href="/register" style={{marginRight: "50px"}}>Register</a>
                <a href="/forgot_password">Forgot Password?</a>
            </div>
            </form>
            </div>
            </div>
        );
    }
}

export default Login;
