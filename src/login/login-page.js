import React from 'react';
import Login from './login';

export default class LoginComponent extends React.Component {
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
