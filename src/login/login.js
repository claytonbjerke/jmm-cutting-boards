import React from 'react';
import {connect} from 'react-redux';
import {logInUser} from '.././Authentication/AuthActions';


let Login = ({dispatch}) => {
  const emptyString = '';
  let usernameInput = emptyString;
  let passwordInput = emptyString;

  const logIn = (username, password) => {
    return {
      type: 'AUTH_USER',
      username,
      password
    };
  };
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
          onClick={() => {
            dispatch(logInUser(usernameInput.value, passwordInput.value));
          }}
        >
            {'Log In'}
        </button>
      </div>
    </div>
  );
};

Login = connect()(Login);

export default Login;
