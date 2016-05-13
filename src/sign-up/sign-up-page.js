import React from 'react';

export default class Dashboard extends React.Component {

  render() {
    const emptyString = '';
    let signUpForm = {
      firstName: emptyString,
      lastName: emptyString,
      phoneNumber: emptyString,
      email: emptyString,
      password: emptyString
    };

    const onClick = (form) => {
      console.log(form.email.value);
    };

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
  }
}
