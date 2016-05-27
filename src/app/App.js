import React from 'react';
import {connect} from 'react-redux';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconButton from 'react-toolbox/lib/button/IconButton';

import {appStartUp} from '.././libs/auth/auth-actions';
import {toggleSideNav} from './nav/nav-actions';
import style from '.././styles/styles.scss';
import NavLinks from './nav/nav-links';

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
          permanentAt={'md'}
          onOverlayClick={() => {
            this.props.dispatch(toggleSideNav());
          }}
        >
          <NavLinks type={'vertical'}/>
        </NavDrawer>
        <Panel>
          <AppBar>
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
  active: React.PropTypes.bool,
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
