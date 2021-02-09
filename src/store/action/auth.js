import * as actionTypes from "./action";
import axios from "axios";
import axiosInstance from "../../Axios/axiosInstance";
import { userDetailGet } from "./userDetail";

export const userDetailDatabaseSucess = () => {
  return {
    type: actionTypes.USER_DETAIL_DATABASE_SUCESS,
  };
};

export const userDetailDatabaseStart = () => {
  return {
    type: actionTypes.USER_DETAIL_DATABASE_START,
  };
};

export const userDetailDatabaseFail = (errorDatabase) => {
  return {
    type: actionTypes.USER_DETAIL_DATABASE_FAIL,
    errorDatabase: errorDatabase,
  };
};

export const userDetailDatabase = (userDetail, respon) => {
  return (dispatch) => {
    dispatch(userDetailDatabaseStart());
    axiosInstance
      .post("/userDetail.json", { userDetail, userId: respon })
      .then((response) => {
        dispatch(userDetailDatabaseSucess());
        dispatch(authSignSucess(respon));
        console.log(response);
      })
      .catch((error) => {
        dispatch(userDetailDatabaseFail());
        console.log(error);
      });
  };
};

export const authSignInStart = () => {
  return {
    type: actionTypes.AUTH_SING_IN_START,
  };
};

export const authSignInSucess = (token, refreshToken, localId) => {
  return {
    type: actionTypes.AUTH_SING_IN_SUCESS,
    token: token,
    refreshToken: refreshToken,
    localId: localId,
  };
};

export const authSignInFail = (errorSingIn) => {
  return {
    type: actionTypes.AUTH_SING_IN_FAIL,
    errorSingIn: errorSingIn,
  };
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("exporesTime");
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const logOut = (expireTime) => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(logoutUser());
    }, expireTime * 1000);
  };
};

export const authSignIn = (email, password) => {
  return (dispatch) => {
    dispatch(authSignInStart());
    const details = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AUTH_API_KEY}`,
        details
      )
      .then((response) => {
        const expiresTime = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("exporesTime", expiresTime);

        dispatch(
          authSignInSucess(
            response.data.idToken,
            response.data.refreshToken,
            response.data.localId
          )
        );

        console.log(response);
      })
      .catch((error) => {
        // dispatch(authSignInFail(error.response.data.error.message));
        // console.log(error.response.data.error.message);
      });
  };
};

export const authSignSucess = (userId) => {
  return {
    type: actionTypes.AUTH_SING_UP_SUCESS,
    userId: userId,
  };
};

export const authSignStart = () => {
  return {
    type: actionTypes.AUTH_SING_UP_START,
  };
};

export const authSignFail = (error) => {
  return {
    type: actionTypes.AUTH_SING_UP_FAIL,
    error: error,
  };
};

export const authSign = (email, password, userDetail) => {
  return (dispatch) => {
    dispatch(authSignStart());
    const details = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_AUTH_API_KEY}`,
        details
      )
      .then((response) => {
        localStorage.setItem("userId", response.data.localId);

        dispatch(userDetailDatabase(userDetail, response.data.localId));
        console.log(response);
      })
      .catch((error) => {
        dispatch(authSignFail(error.response.data.error.message));
        console.log(error.response.data.error.message);
      });
  };
};

export const authTokenValidation = () => {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    if (!token) {
      dispatch(logoutUser());
    } else {
      const refToken = localStorage.getItem("refreshToken");
      const userId = localStorage.getItem("userId");
      const exporesTime = new Date(localStorage.getItem("exporesTime"));
      console.log("token before", token);
      if (exporesTime <= new Date()) {
        if (refToken) {
          console.log("token before", token);
          token = localStorage.getItem("refreshToken");
          console.log("token after", token);
        }
        dispatch(logoutUser());
      } else {
        dispatch(authSignInSucess(token, refToken, userId));
        dispatch(userDetailGet(token, userId));
        console.log(
          "date ",
          (exporesTime.getTime() - new Date().getTime()) / 1000
        );
        dispatch(logOut((exporesTime.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
