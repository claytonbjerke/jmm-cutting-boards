import React from 'react';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';

import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link/Link';

let LoggedOutNav = () => {
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
        to={'/login'}
      >
        <Link
          label={'Login'}
          icon={'account_circle'}
        />
      </LinkContainer>
      <LinkContainer
        to={'/sign-up'}
      >
        <Link
          label={'Sign Up'}
          icon={'assignment'}
        />
      </LinkContainer>
    </Navigation>
  );
};

LoggedOutNav = connect()(LoggedOutNav);

export default LoggedOutNav;
