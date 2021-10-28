import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { searchbarReducer } from "./searchbarReducer";

const reducers = combineReducers({
  bookList: booksReducer,
  searchbar: searchbarReducer,
});

export default reducers;