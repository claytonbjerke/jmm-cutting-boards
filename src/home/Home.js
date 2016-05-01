import React from 'react';

import Auth from '../services/Auth';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Auth.loggedIn()
    };
  }

  render() {
    return (
      <div>
        'HI LOL!!!'
        {this.state.loggedIn
          ? 'hi lol from home (LOGGED IN)'
          : 'hi lol from home (LOGGED OUT)'
        }
      </div>
    );
  }
}
