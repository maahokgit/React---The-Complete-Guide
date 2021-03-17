import axios from "axios";
import * as actionTypes from "./actionTypes";

const API_KEY = process.env.REACT_APP_API_KEY;

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    }

    axios
      .post(url+API_KEY, authData)
      .then((response) => {
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
