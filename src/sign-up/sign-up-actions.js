import {submitSignUpForm} from './sign-up-service';

export const SUBMIT_SIGN_UP_FORM = 'SUBMIT_SIGN_UP_FORM';
function submitSignUp() {
  return {
    type: SUBMIT_SIGN_UP_FORM
  };
}

export const SUBMIT_SIGN_UP_FORM_RESPONSE = 'SUBMIT_SIGN_UP_FORM_RESPONSE';
function submitSignUpFormResponse(response) {
  return {
    type: SUBMIT_SIGN_UP_FORM_RESPONSE,
    response
  };
}


export function signUp(form) {
  return (dispatch) => {
    dispatch(submitSignUp());
    return submitSignUpForm(form).then((response) => {
      dispatch(submitSignUpFormResponse(response));
    });
  };
}
