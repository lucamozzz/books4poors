import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";

const reducers = combineReducers({
  bookList: booksReducer,
});

export default reducers;