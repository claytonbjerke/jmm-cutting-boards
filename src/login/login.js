import React from 'react';
import {reduxForm} from 'redux-form';
import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';

import {logInUser} from '.././libs/auth/auth-actions';

const Login = ({fields, handleSubmit, dispatch}) => {
  let username = fields.username;
  let password = fields.password;
  let keepMeLoggedIn = fields.keepMeLoggedIn;
  return (
    <div>
      <Input
        autoFocus
        type={'text'}
        label={'Username'}
        {...username}
      />
      <Input
        type={'password'}
        label={'Password'}
        {...password}
      />
      <div>
        <Checkbox
          label={'Keep me logged in'}
          {...keepMeLoggedIn}
        />
        <Button
          type={'submit'}
          label={'Login'}
          raised
          accent
          onClick={handleSubmit((data) => {
            dispatch(
              logInUser(data.username, data.password)
            );
          })}
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool,
  dispatch: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login',
  fields: ['username', 'password', 'keepMeLoggedIn']
})(Login);
