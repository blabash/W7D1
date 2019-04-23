import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;

  ReactDOM.render (
    <h1> Todo App </h1>,
    document.getElementById('root')
  );
});
// line 6 will be our app component
