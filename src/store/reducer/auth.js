import * as actionType from "../action/action";

const intialState = {
  token: null,
  refreshToken: null,
  userId: null,
  error: null,
  errorSingIn: null,
  expiryTime: null,
  loading: false,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SING_UP_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.AUTH_SING_UP_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionType.AUTH_SING_UP_SUCESS:
      return {
        ...state,
        loading: false,
        userId: action.userId,
      };

    case actionType.AUTH_SING_IN_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.AUTH_SING_IN_FAIL:
      return {
        ...state,
        errorSingIn: action.errorSingIn,
        loading: false,
      };

    case actionType.AUTH_SING_IN_SUCESS:
      return {
        ...state,
        userId: action.localId,
        loading: false,
        expiryTime: action.expiryTime,
        token: action.token,
        error: null,
        refreshToken: action.refreshToken,
      };

    case actionType.LOGOUT_USER:
      return {
        ...state,
        expiryTime: null,
        token: null,
        error: null,
        refreshToken: null,
      };

    default:
      return state;
  }
};

export default authReducer;
