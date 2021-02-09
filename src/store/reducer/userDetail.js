import * as actionType from "../action/action";

const initialState = {
  error: null,
  loading: false,
  userDetail: [],
  userDetailGender: null,
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_DETAIL_GET_DATABASE_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.USER_DETAIL_GET_DATABASE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionType.USER_DETAIL_GET_DATABASE_SUCESS:
      return {
        ...state,
        loading: false,
        userDetail: action.userDetail,
        userDetailGender: action.userDetailGender,
      };
  }
  return state;
};

export default userDetailReducer;
