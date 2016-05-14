import React from 'react';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';

import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';

let NavBar = ({
  loggedIn
}) => {
  return (
    <div>
      <ul role="nav">
        <li>
          <IndexLink to="/" activeClassName="active">{'Home'}</IndexLink>
        </li>
        {loggedIn ? (
          <LoggedInNav />
        ) : (
          <LoggedOutNav/>
        )}
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  loggedIn: React.PropTypes.bool
};

const mapStateToProps = (
    state
) => {
  return {
    loggedIn: state.authReducer.loggedIn
  };
};

NavBar = connect(
  mapStateToProps
)(NavBar);

export default NavBar;
