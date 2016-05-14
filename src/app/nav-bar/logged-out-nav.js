import React from 'react';
import {connect} from 'react-redux';

import NavLink from '.././NavLink';

let LoggedOutNav = () => {
  return (
    <div>
      <li>
        <NavLink to="/login">{'Login'}</NavLink>
      </li>
      <li>
        <NavLink to="/sign-up">{'Sign Up'}</NavLink>
      </li>
    </div>
  );
};

LoggedOutNav = connect()(LoggedOutNav);

export default LoggedOutNav;
