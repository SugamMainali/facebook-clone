import * as actionTypes from "./action";
import axiosInstance from "../../Axios/axiosInstance";

export const userDetailGetSucess = (userDetail, userDetailGender) => {
  return {
    type: actionTypes.USER_DETAIL_GET_DATABASE_SUCESS,
    userDetail: userDetail,
    userDetailGender: userDetailGender,
    userProfile: null,
  };
};

export const userDetailGetStart = () => {
  return {
    type: actionTypes.USER_DETAIL_GET_DATABASE_START,
  };
};

export const userDetailGetFail = (error) => {
  return {
    type: actionTypes.USER_DETAIL_GET_DATABASE_FAIL,
    error: error,
  };
};

export const userDetailGet = (token, userId) => {
  return (dispatch) => {
    dispatch(userDetailGetStart());

    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axiosInstance
      .get("/userDetail.json" + queryParams)
      .then((response) => {
        const userDat = [];
        for (let val in response.data) {
          userDat.push({
            ...response.data[val],
            id: val,
          });
        }
        console.log("ayo" + JSON.stringify(userDat));
        const userData = userDat.map((k) => {
          return k.userDetail.userDetails;
        });
        const userDetailGen = userDat.map((k) => {
          return k.userDetail.userDetails.Gender;
        });
        console.log("userData is " + JSON.stringify(userData));
        console.log("userData Gender is " + JSON.stringify(userDetailGen));
        dispatch(userDetailGetSucess(userData, userDetailGen));
        console.log(userData);
      })
      .catch((error) => {
        dispatch(userDetailGetFail(error));
        console.log(error);
      });
  };
};

export const userDetailCall = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token) {
      dispatch(userDetailGet(token, userId));
    }
  };
};
