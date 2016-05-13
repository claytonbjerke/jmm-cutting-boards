import React from 'react';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';

import {logOutUser, appStartUp} from '.././Authentication/AuthActions';
import NavLink from './NavLink';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(appStartUp());
  }

  render() {
    return (
      <div>
        <ul role="nav">
          <li>
            <IndexLink to="/" activeClassName="active">{'Home'}</IndexLink>
          </li>
          {this.props.loggedIn ? (
            <li>
              <NavLink to="/dashboard">{'Dashboard'}</NavLink>
            </li>
          ) : (
              ''
          )}
          <li>
            {this.props.loggedIn ? (
              <NavLink to="/" onClick={() => {
                this.props.dispatch(logOutUser());
              }}>
                {'Log out'}
              </NavLink>
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
  children: React.PropTypes.element.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool
};

const mapStateToProps = (
    state
) => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
};

export default connect(
  mapStateToProps
)(App);
