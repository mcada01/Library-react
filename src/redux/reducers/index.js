import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import bookReducer from "./bookReducer";

export const rootReducer = combineReducers({
  bookState: bookReducer,
  authorState: authorReducer,
});
