import React from 'react';
import {browserHistory} from 'react-router';

import Auth from '.././Authentication/Auth';

export default class Login extends React.Component {

  render() {
    const emptyString = '';
    let usernameNode = emptyString;
    let passwordNode = emptyString;
    const onClick = (e) => {
      e.preventDefault();
      Auth.userLogin(usernameNode.value, passwordNode.value).then((res) => {
        if (res.authenticated) {
          browserHistory.push('/');
        }
      }).catch((err) => {
        console.log('wrong credentials', err);
      });
    };
    const usernameRefs = (node) => {
      usernameNode = node;
    };
    const passwordRefs = (node) => {
      passwordNode = node;
    };
    return (
      <div>
        <div>
          <label htmlFor={'username'}>
            {'Username:'}
          </label>
          <input
            id={'username'}
            autoFocus
            placeholder={'Username'}
            type={'text'}
            ref={usernameRefs}
          />
        </div>
        <div>
          <label
            htmlFor={'password'}
          >
            {'Password:'}
          </label>
          <input
            id={'Password'}
            placeholder={'Password'}
            type={'password'}
            ref={passwordRefs}
          />
        </div>
        <div>
          <button onClick={onClick}>
            {'Submit'}
          </button>
        </div>
      </div>
    );
  }
}
