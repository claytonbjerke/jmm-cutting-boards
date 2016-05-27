import React from 'react';
import {connect} from 'react-redux';

import Navigation from 'react-toolbox/lib/navigation';
import NavLink from './nav-link';

import {logOutUser} from '../../libs/auth/auth-actions';

const loggedInLinks = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: 'dashboard'
  }
];

const loggedOutLinks = [
  {
    to: '/login',
    label: 'Login',
    icon: 'account_circle'
  }, {
    to: '/sign-up',
    label: 'Sign Up',
    icon: 'assignment'
  }
];

const NavLinks = ({
  loggedIn,
  type,
  logout
}) => {
  let links = loggedIn ? loggedInLinks : loggedOutLinks;
  return (
    <Navigation type={type}>
      <NavLink
        to={'/'}
        label={'Home'}
        icon={'home'}
      />
      {
        links.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.to}
              label={link.label}
              icon={link.icon}
            />
          );
        })
      }
      {
        loggedIn ? (
          <NavLink
            to={'/'}
            label={'Logout'}
            icon={'account_circle'}
            onClick={logout}
          />
      ) : (
        ''
      )
    }
    </Navigation>
  );
};

NavLinks.propTypes = {
  loggedIn: React.PropTypes.bool,
  type: React.PropTypes.string,
  logout: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logOutUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinks);
