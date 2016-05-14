import React from 'react';
import {connect} from 'react-redux';

import {logOutUser} from '../../Authentication/AuthActions';
import NavLink from '.././NavLink';

let LoggedInNav = ({onClick}) => {
  const logOut = () => {
    onClick();
  };
  return (
    <div>
      <li>
        <NavLink to="/dashboard">{'Dashboard'}</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={logOut}>
          {'Log out'}
        </NavLink>
      </li>
    </div>
  );
};

LoggedInNav.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (
    state
) => {
  return {
    state
  };
};

const mapDispatchToProps = (
    dispatch
) => {
  return {
    onClick: () => {
      dispatch(logOutUser());
    }
  };
};

LoggedInNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInNav);

export default LoggedInNav;
