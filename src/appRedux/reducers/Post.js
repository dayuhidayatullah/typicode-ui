import * as ActionType from "../constants/posts";

const INIT_STATE = {
  id: null,
  postList: [],
  detailPost: {},
  commentPost: [],
  isLoading: false,
  error: {},
  comments: {},
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionType.GET_ALL_POST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_ALL_POST_SUCCESS: {
      return {
        ...state,
        postList: payload,
      };
    }
    case ActionType.GET_ALL_POST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case ActionType.GET_ALL_COMMENT_BY_POST_ID: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_ALL_COMMENT_BY_POST_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: payload,
      };
    }
    case ActionType.GET_ALL_COMMENT_BY_POST_ID_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    }
    case ActionType.GET_DETAIL_POST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_DETAIL_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        detailPost: payload,
      };
    }
    case ActionType.GET_DETAIL_POST_FAILED: {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
