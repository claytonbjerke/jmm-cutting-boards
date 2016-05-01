import React from 'react';
import {IndexLink} from 'react-router';

import NavLink from './NavLink';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ul role="nav">
          <li>
            <IndexLink to="/" activeClassName="active">{'Home'}</IndexLink>
          </li>
          <li>
            <NavLink to="/login">{'Login'}</NavLink>
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
