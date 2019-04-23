import { combineReducers } from "redux";
import todosReducer from "./todos_reducer.js";

// debugger;
const rootReducer = combineReducers(
  {
    todos: todosReducer
  });

export default rootReducer;