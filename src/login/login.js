import React from 'react';
import { browserHistory } from 'react-router';

import auth from '.././Authentication/Auth';

export default class LoginComponent extends React.Component {

  render() {
    const emptyString = '';
    let usernameInput = emptyString;
    let passwordInput = emptyString;

    const logIn = () => {
      auth.login(usernameInput.value, passwordInput.value)
        .then((status) => {
          if (status.authenticated) {
            browserHistory.push('/dashboard');
          }
        })
        .catch((err) => {
          console.log('LOG IN ERROR: ', err);
        });
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
          placeholder={'username'}
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
            onClick={logIn}
          >
            {'Log In'}
          </button>
        </div>
      </div>
    );
  }
}
