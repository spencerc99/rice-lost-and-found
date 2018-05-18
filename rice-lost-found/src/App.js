import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {
  Link,
  Route,
  Redirect,
} from 'react-router-dom'
import {
  Menu,
} from 'semantic-ui-react'
import AuthService from './services/auth_service';

import CreateListingPage from './components/listing/create-listing-page';
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'

const auth = new AuthService();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  state = { activeItem: 'home',  isLoggedIn: false}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div class="ui container">
        <Menu pointing secondary size="massive">
          <Link to="/">
          <Menu.Item name='home' active={activeItem==='home' } onClick={this.handleItemClick} />
          </Link>
          <Link to="/new">
          <Menu.Item name='add_listing' active={activeItem==='add_listing' } onClick={this.handleItemClick} />
          </Link>
          <Menu.Item name='friends' active={activeItem==='friends' } onClick={this.handleItemClick} />
          <Menu.Menu position="right" >
            {!isLoggedIn ? (
              <Link to="/register">
                <Menu.Item name='Register' position='right' onClick={this.handleItemClick} />
              </Link>
            ) : (
              <Link to="/logout">
                <Menu.Item name='logout' position='right' onClick={this.handleItemClick} />
              </Link>
            )}
          </Menu.Menu>
        </Menu>

        {/* ROUTES HERE */}
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/new" component={CreateListingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register/" component={Register} />
      </div>
    );
  }
}

export default App;
