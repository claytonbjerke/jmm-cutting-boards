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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(appStartUp());
  }

  render() {
    return (
      <Layout className={style.content}>
        <NavDrawer
          active={this.props.active}
          permanentAt={'sm'}
          onOverlayClick={() => {
            this.props.dispatch(toggleSideNav())
          }}
        >
          <NavSideDrawerItems/>
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
    active: state.nav.active
  };
};

export default connect(
  mapStateToProps
)(App);
