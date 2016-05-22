import React from 'react';
import {connect} from 'react-redux';

import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link/Link';

const NavSideDrawerItems = () => {
  return (
    <Navigation type='vertical'>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
  );
};

const mapStateToProps = (
    state
) => {
  return {
    links: state.nav.active
  };
};

export default connect(
  mapStateToProps
)(NavSideDrawerItems);
