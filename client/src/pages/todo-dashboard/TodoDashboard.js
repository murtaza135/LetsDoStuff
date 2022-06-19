import React, { Fragment } from 'react';
import TodoForm from 'features/todos/TodoForm';
import TodoItemGroup from 'features/todos/TodoItemGroup';

const TodoDashboard = () => (
  <Fragment>
    <TodoForm />
    <TodoItemGroup />
  </Fragment>
);

export default TodoDashboard;
