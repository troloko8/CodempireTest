import { combineReducers } from "redux";
import { modalReducer } from "./modal/reducers";
import { answersReducer } from "./result/reducers";

export default combineReducers({
  modal: modalReducer,
  result: answersReducer
});