import React from 'react';
import {connect} from 'react-redux';

import NavLoggedIn from './nav-logged-in';
import NavLoggedOut from './nav-logged-out';

const NavSideDrawerItems = ({loggedIn}) => {
  return (
    loggedIn
      ? (<NavLoggedIn/>)
      : (<NavLoggedOut/>)
  );
};

NavSideDrawerItems.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {loggedIn: state.auth.loggedIn};
};

export default connect(mapStateToProps)(NavSideDrawerItems);
