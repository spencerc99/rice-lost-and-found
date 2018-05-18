import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{padding: "100px"}}>
            <center><h2>Register</h2></center>
            <br/>
            <div className="container" style={{width: "60%"}}>
            <form>
            <div className="form-group row">
              <label for="first_name" className="col-form-label">First Name *</label>
              <input className="form-control" type="text" id="first_name"/>
            </div>
            <div className="form-group row">
              <label for="middle_name" className="col-form-label">Middle Name</label>
              <input className="form-control" type="text" id="middle_name"/>
            </div>
            <div className="form-group row">
              <label for="last_name" className="col-form-label">Last Name *</label>
              <input className="form-control" type="text" id="last_name"/>
            </div>
            <div className="form-group row">
                <label class="control-label" for="date">Birthdate *</label>
                <input class="form-control" id="birthdate" name="birthdate" placeholder="MM/DD/YYY" type="text"/>
            </div>
            <div className="form-group row">
              <label for="email" className="col-2 col-form-label">Contact E-Mail *</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="email"/>
                </div>
            </div>
            <div className="form-group row">
              <label for="password" className="col-2 col-form-label">Password *</label>
                <div className="col-10">
                  <input className="form-control" type="password" id="password"/>
                </div>
            </div>
            <div className="form-group row col-10">
                <button type="submit" className="btn btn-primary" style={{marginRight: "50px"}}>Register</button>
            </div>
            </form>
            </div>
            </div>
        );
    }
}

export default Register;
