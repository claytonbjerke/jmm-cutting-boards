import React from 'react';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';

import {appStartUp} from './app-start-up-actions';
import {logOut} from '.././Authentication/AuthActions';
import NavLink from './NavLink';
import auth from '.././Authentication/Auth';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(appStartUp(auth.loggedIn()));
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
              <NavLink to="/" onClick={this.props.dispatch(logOut())}>{'Log out'}</NavLink>
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
    loggedIn: state.appStartUpReducer.loggedIn
  };
};

export default connect(
  mapStateToProps
)(App);
