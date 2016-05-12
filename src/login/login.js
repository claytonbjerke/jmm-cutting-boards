import React from 'react';
import {connect} from 'react-redux';
import {logInUser} from '.././Authentication/AuthActions';

const mapStateToProps = (
    state
) => {
  return {
    response: state.response
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

let Login = ({onClick}) => {
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
            onClick(usernameInput.value, passwordInput.value);
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
