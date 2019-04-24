
export const allTodos = (state) => {
  // debugger;
  let todoArray = Object.keys(state.todos);

  // todoArray = [1, 2, 3]
  // key = 1
  return todoArray.map((key) => {
    return state.todos[key];
  });
}

// state.todos = 
// {
//   1: {id: 1, body: talrtkda}
// } 

