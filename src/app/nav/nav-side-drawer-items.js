import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';

import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link/Link';

let loggedInLinks = [{
  id: 'homeId',
  index: true,
  label: 'Home',
  to: '/',
  icon: 'home'
}, {
  id: 'dashId',
  label: 'Dashboard',
  to: '/dashboard',
  icon: 'dashboard'
}, {
  id: 'logoutId',
  label: 'Logout',
  to: '/',
  icon: 'account_circle'
}];

let loggedOutLinks = [{
  id: 'homeId',
  index: true,
  label: 'Home',
  to: '/',
  icon: 'home'
}, {
  id: 'signUpId',
  label: 'Sign Up',
  to: '/sign-up',
  icon: 'assignment'
}, {
  id: 'loginId',
  label: 'Login',
  to: '/login',
  icon: 'account_circle'
}];

const getRows = (items) => {
  let rows = [];
  items.forEach((row) => {
    rows.push(
      <LinkContainer
        key={row.id}
        onClick={() => {
          console.log('click');
        }}
        {...row}
      >
        <Link
          {...row}
        />
      </LinkContainer>
    );
  });
  return rows;
};

const NavSideDrawerItems = props => {
  let rows = getRows(props.items);
  return (
    <Navigation type={'vertical'}>
      {rows}
    </Navigation>
  );
};

NavSideDrawerItems.propTypes = {
  items: React.PropTypes.array.isRequired
};

const mapStateToProps = () => {

};

export default connect()(NavSideDrawerItems);
