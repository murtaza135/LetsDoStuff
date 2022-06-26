import React, { Fragment } from 'react';
import AddTodoForm from 'features/todos/AddTodoForm';
import EditTodoForm from 'features/todos/EditTodoForm';
import TodoItemGroup from 'features/todos/TodoItemGroup';
import TodoFormContext, { TodoFormProvider } from 'features/todos/TodoFormContext';

const TodoDashboard = () => (
  <TodoFormProvider>
    <TodoFormContext.Consumer>
      {({ todoFormState }) => (
        <Fragment>
          {
            todoFormState === 'edit'
              ? <EditTodoForm />
              : <AddTodoForm />
          }
          <TodoItemGroup />
        </Fragment>
      )}
    </TodoFormContext.Consumer>
  </TodoFormProvider>
);

export default TodoDashboard;
