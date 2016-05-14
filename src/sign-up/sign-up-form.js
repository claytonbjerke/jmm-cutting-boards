import React from 'react';
import {connect} from 'react-redux';

import {signUp} from './sign-up-actions';

const emptyString = '';
let signUpForm = {
  firstName: emptyString,
  lastName: emptyString,
  phoneNumber: emptyString,
  email: emptyString,
  password: emptyString
};

let SignUpForm = ({onClick}) => {
  return (
    <div>
      {'Fill out this form to get started'}
      <div>
        <div>
          <input
            autoFocus
            type={'text'}
            placeholder={'First Name'}
            ref={ref => {signUpForm.firstName = ref;}} />
          <input
            type={'text'}
            placeholder={'Last Name'}
            ref={ref => {signUpForm.lastName = ref;}} />
        </div>
        <div>
          <input
            type={'text'}
            placeholder={'Phone Number'}
            ref={ref => {signUpForm.phoneNumber = ref;}} />
        </div>
        <div>
          <input
            type={'text'}
            placeholder={'Email'}
            ref={ref => {signUpForm.email = ref;}} />
        </div>
        <div>
          <input
            type={'password'}
            placeholder={'Password'}
            ref={ref => {signUpForm.password = ref;}} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick(signUpForm);
          }}
        >
            {'Sign Up'}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (
    state
) => {
  return {
    response: state.response
  };
};

const mapDispatchToProps = (
    dispatch
) => {
  return {
    onClick: (form) => {
      dispatch(
          signUp(signUp({
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            phoneNumber: form.phoneNumber.value,
            email: form.email.value,
            password: form.password.value
          }))
        );
    }
  };
};

SignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

export default SignUpForm;
