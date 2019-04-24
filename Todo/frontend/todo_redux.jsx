import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import Root from "./components/root.jsx";
import allTodos from "./reducers/selectors.js";


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;

  ReactDOM.render (
    <Root store={store} />,
    document.getElementById('root')
  );
});
// line 6 will be our app component
