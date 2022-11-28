import { combineReducers } from "redux";
import Post from "./Post";
import User from "./User";
const createRootReducer = combineReducers({
  post: Post,
  user: User,
});
export default createRootReducer;
