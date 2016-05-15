import React from 'react';
import {connect} from 'react-redux';

import NavLink from '../app/nav/nav-link';
import SignUpForm from './sign-up-form';

/*
TODO:
- needs to show sign up page if user has not submitted
- else show success or error depending on response of submission

 */

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        {!this.props.status ? (
          <SignUpForm/>
        ) : (
          <div>
            {'Please check your email. '}
            <NavLink to="/login">{'Login'}</NavLink>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (
    state
) => {
  return {
    status: state.signUpReducer.status
  };
};

export default connect(
  mapStateToProps
)(SignUpPage);
