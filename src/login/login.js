import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

import {logInUser} from '.././auth/auth-actions';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    const emptyString = '';
    let usernameInput = emptyString;
    let passwordInput = emptyString;
    return (
      <div>
        <input
          autoFocus
          type={'text'}
          placeholder={'username'}
          ref={ref => {usernameInput = ref;}}
        />
        <input
          type={'password'}
          placeholder={'password'}
          ref={ref => {passwordInput = ref;}}
        />
        <div>
          <input
            type={'checkbox'}
            onClick={(e) => {
              //  keepLoggedIn = e.target.checked
            }}
          />{'Keep me logged in'}
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.onClick(usernameInput.value, passwordInput.value);
            }}
          >
              {'Log In'}
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool
};

const mapStateToProps = (
    state
) => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
};

const mapDispatchToProps = (
    dispatch
) => {
  return {
    onClick: (username, password) => {
      dispatch(
          logInUser(username, password)
        );
    }
  };
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;
