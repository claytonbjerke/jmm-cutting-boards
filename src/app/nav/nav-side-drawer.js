import React from 'react';
import {connect} from 'react-redux';

import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';

import {toggleSideNav} from './nav-actions';

const NavSideDrawer = ({
  active,
  dispatch
}) => {
  return (
    <NavDrawer
      active={active}
      permanentAt={'sm'}
      onOverlayClick={() => {
        dispatch(toggleSideNav())
      }}
    >
      <p>
          {'Navigation, account switcher, etc. go here.'}
      </p>
    </NavDrawer>
  );
}

const mapStateToProps = (
    state
) => {
  return {
    active: state.nav.active
  };
};

export default connect(
  mapStateToProps
)(NavSideDrawer);
