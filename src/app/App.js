import React from 'react';
import {connect} from 'react-redux';

import {appStartUp} from '.././auth/auth-actions';
import NavBar from './nav/nav-bar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(appStartUp());
  }

  render() {
    return (
      <div>
        <NavBar/>
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

export default connect()(App);
