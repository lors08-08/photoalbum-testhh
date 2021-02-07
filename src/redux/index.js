import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import users from "./users";
import posts from "./posts";
import albums from "./albums";

const rootReducer = combineReducers({
  users,
  posts,
  albums,
});
const index = createStore(rootReducer, applyMiddleware(thunk, logger));

export default index;
