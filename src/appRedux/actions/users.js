import * as ActionType from "../constants/users";

export const getDataUser = (payload) => ({
  type: ActionType.GET_DATA_USER,
  payload,
});

export const getDataUserSuccess = (payload) => ({
  type: ActionType.GET_DATA_USER_SUCCESS,
  payload,
});

export const getDataUsersFailed = (payload) => ({
  type: ActionType.GET_DATA_USER_FAILED,
  payload,
});
