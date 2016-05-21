import React from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import Login from './login';

export default class LoginComponent extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    return (
      <div>
        <Login/>
        <p>
          <b>{'username: hi \n password: lol'}</b>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (
    state
) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  mapStateToProps
)(LoginComponent);
