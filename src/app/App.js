import React from 'react';
import {IndexLink} from 'react-router';

import NavLink from './NavLink';
import auth from '.././Authentication/Auth';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn()
    };
  }

  _logout() {
    auth.logout();
    this.setState({
      loggedIn: auth.loggedIn()
    });
  }

  render() {
    return (
      <div>
        <ul role="nav">
          <li>
            <IndexLink to="/" activeClassName="active">{'Home'}</IndexLink>
          </li>
          {this.state.loggedIn ? (
            <li>
              <NavLink to="/dashboard">{'Dashboard'}</NavLink>
            </li>
          ) : (
              ''
          )}
          <li>
            {this.state.loggedIn ? (
              <NavLink to="/" onClick={this._logout}>{'Log out'}</NavLink>
            ) : (
              <NavLink to="/login">{'Sign in'}</NavLink>
            )}
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};
