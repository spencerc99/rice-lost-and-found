import axios from 'axios';
import Rx from 'rxjs';

const url = "http://localhost:9000/user/"; // TOOO: pull url from a .env json

export default class AuthService {
    constructor() {
        this.isAuthenticated = false;
    }

    login(email, password) {
        // return Rx.Observable.fromPromise(axios.post(`${url}/login`,{
        //     email,
        //     password
        // }));
        axios.post(`${url}/login`, {
            email,
            password
        }).then(res => {
            this.isAuthenticated = true;
            return res;
        }).catch(err => {
            console.log("Login failed! " + err);
            this.isAuthenticated = false;
        })
    }

    logout(email) {
        // return Rx.Observable.fromPromise(axios.post(`${url}/logout`, {
        //     email
        // }));
        axios.post(`${url}/logout`, {
            email
        }).then(res => {
            this.isAuthenticated = false;
            return res;
        }).catch(err => {
            console.log("Login failed! " + err);
            throw err;
        })
    }

    isAuthenticated() {
        // TODO: find cookie and see if it is not expired if so return true
        return this.isAuthenticated;
    }
}