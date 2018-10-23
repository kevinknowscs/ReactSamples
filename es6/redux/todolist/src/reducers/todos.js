const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('Inside ADD_TODO reducer');
      let newState = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      console.log(newState);
      return newState;

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todos;