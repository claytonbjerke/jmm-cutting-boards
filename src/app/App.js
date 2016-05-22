import React from 'react';
import {connect} from 'react-redux';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconButton from 'react-toolbox/lib/button/IconButton';

import {appStartUp} from '.././auth/auth-actions';
import {toggleSideNav} from './nav/nav-actions';
import NavSideDrawerItems from './nav/nav-side-drawer-items';

import style from '.././styles/styles.scss';

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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(appStartUp());
  }

/*

TODO:
- have a set of links for now that are toggled by logged in status (temporary)

 */

  render() {
    let links = this.props.loggedIn ? loggedInLinks : loggedOutLinks;
    return (
      <Layout className={style.content}>
        <NavDrawer
          active={this.props.active}
          permanentAt={'lg'}
          onOverlayClick={() => {
            this.props.dispatch(toggleSideNav())
          }}
        >
          <NavSideDrawerItems
            items={links}
          />
        </NavDrawer>
        <Panel>
          <AppBar
            flat
          >
            <IconButton
              icon={'menu'}
              inverse
              onClick={() => {
                this.props.dispatch(toggleSideNav());
              }}
            />
          </AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
               {this.props.children}
          </div>
        </Panel>
      </Layout>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool
};

const mapStateToProps = (
    state
) => {
  return {
    active: state.nav.active,
    loggedIn: state.auth.loggedIn
  };
};

export default connect(
  mapStateToProps
)(App);
