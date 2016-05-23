/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';

import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link/Link';

import {logOutUser} from '../../auth/auth-actions';


let LoggedInNav = ({onClick}) => {
  const logOut = () => {
    onClick();
  };
  return (
    <Navigation type={'vertical'}>
      <LinkContainer
        to={'/'}
      >
        <Link
          label={'Home'}
          icon={'home'}
        />
      </LinkContainer>
      <LinkContainer
        to={'/dashboard'}
      >
        <Link
          label={'Dashboard'}
          icon={'dashboard'}
        />
      </LinkContainer>
      <LinkContainer
        to={'/'}
        onClick={logOut}
      >
        <Link
          label={'Logout'}
          icon={'account_circle'}
        />
      </LinkContainer>
    </Navigation>
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
