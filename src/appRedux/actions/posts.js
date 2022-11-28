import * as ActionType from "../constants/posts";

export const getAllPost = (payload) => ({
  type: ActionType.GET_ALL_POST,
  payload,
});

export const getAllPostSuccess = (payload) => ({
  type: ActionType.GET_ALL_POST_SUCCESS,
  payload,
});

export const getAllPostFailed = (payload) => ({
  type: ActionType.GET_ALL_POST_FAILED,
  payload,
});

export const getDetailPost = (payload) => ({
  type: ActionType.GET_DETAIL_POST,
  payload,
});

export const getDetailPostSuccess = (payload) => ({
  type: ActionType.GET_DETAIL_POST_SUCCESS,
  payload,
});
export const getDetailPostFailed = (payload) => ({
  type: ActionType.GET_DETAIL_POST_FAILED,
  payload,
});

export const getAllCommentByPostId = (payload) => ({
  type: ActionType.GET_ALL_COMMENT_BY_POST_ID,
  payload,
});

export const getAllCommentByPostIdSuccess = (payload) => ({
  type: ActionType.GET_ALL_COMMENT_BY_POST_ID_SUCCESS,
  payload,
});
export const getAllCommentByPostIdFailed = (payload) => ({
  type: ActionType.GET_ALL_COMMENT_BY_POST_ID_FAILED,
  payload,
});
