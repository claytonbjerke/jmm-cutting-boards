import React from 'react';
import {IndexLink} from 'react-router';

import NavLink from './NavLink';
import Auth from '../Authentication/Auth';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Auth.loggedIn()
    };
  }

  render() {
    const logOut = () => {
      Auth.logout();
      this.setState({
        loggedIn: Auth.loggedIn()
      });
    };
    return (
      <div>
        <ul role="nav">
          <li>
            <IndexLink to="/" activeClassName="active">{'Home'}</IndexLink>
          </li>
          <li>
            {this.state.loggedIn
              ? <NavLink to="/" onClick={logOut}>{'Logout'}</NavLink>
              : <NavLink to="/login">{'Login'}</NavLink>}
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
