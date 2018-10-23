import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => {
          console.log('Calling toggleTodo', toggleTodo);
          toggleTodo(todo.id)
        }}
      />
    )}
  </ul>
);

export default TodoList;
