import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

import {logInUser} from '.././Authentication/AuthActions';

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
      return dispatch(
          logInUser(username, password)
        );
    }
  };
};

let Login = ({
  onClick,
  loggedIn
}) => {
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
            onClick(usernameInput.value, passwordInput.value).then(() => {
              if (loggedIn) {
                browserHistory.push('/dashboard');
              }
            });
          }}
        >
            {'Log In'}
        </button>
      </div>
    </div>
  );
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;
