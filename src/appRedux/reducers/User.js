import * as ActionType from "../constants/users";
const INIT_STATE = {
  detailPost: {},
  isLoading: false,
  error: {},
  isLogin: false,
  userList: [],
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_DATA_USER: {
      return {
        ...state,
        isLoading: true,
        isLogin: false,
      };
    }
    case ActionType.GET_DATA_USER_SUCCESS: {
      console.info(payload, "<<<< reducer");
      const findUser = payload?.data?.find(
        (item) => item.username === payload.username
      );
      if (findUser) window.localStorage.setItem("username", payload.username);
      // const tempState = {
      //   ...state,
      //   isLogin
      // }
      const stateLogin = {
        ...state,
        isLoading: false,
        isLogin: findUser ? true : false,
        error: !findUser ? { message: "Username atau Password salah" } : {},
        userList: payload?.data,
      };
      const stateHome = {
        ...state,
        isLoading: false,
        isLogin: true,
        // error: !findUser ? { message: "Username atau Password salah" } : {},
        userList: payload?.data,
      };
      return payload?.username ? stateLogin : stateHome;
    }
    case ActionType.GET_DATA_USER_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
      };
    }
    default:
      return state;
  }
};
