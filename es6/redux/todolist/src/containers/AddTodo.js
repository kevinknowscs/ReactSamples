import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let title;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!title.value.trim()) {
          return;
        }
        console.log('Dispatch ', title.value);
        dispatch(addTodo(title.value));
        title.value = '';
      }}>
        <input ref={node => title = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);