import React from 'react';
import TodoListItem from "./todo_list_item";

const TodoList = (props) => {
  const todoItems = props.todos.map((todo) => {
    return <TodoListItem todo={todo}/> 
  })
  return (
    <ul>
      {todoItems}
    </ul>
  )
}

// this.props.receiveTodo(todo);

export default TodoList;