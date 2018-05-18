import React, { Component } from 'react';
import { Redirect } from 'react-router';
import AuthService from '../services/auth-service';

const auth = new AuthService();

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            state: '',
            redirectToReferrer: false
        };
    }

    login(event) {
        event.preventDefault();
        auth.login(this.state.user, this.state.password)
            .then((res) => {
                this.setState({redirectToReferrer: true});
            })
            .catch((err) => {
                this.setState(function(prevState, props) {
                    return { status: "Error" }
                })
            })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer === true) {
            <Redirect to={from} />
        }

        return (
            <div class="container">
                <h1>Login {this.state.status}</h1>
                <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.user} name="username" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={this.state.password} name="password" placeholder="Password" required/>
                </div>
                <button type="submit" onClick={this.login.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}