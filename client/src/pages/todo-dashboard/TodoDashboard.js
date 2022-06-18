import React from 'react';
import { PageContainer } from 'global-components/layout';
import TodoForm from 'features/todos/TodoForm';
import TodoItem from 'features/todos/TodoItem';
import TodoItemGroup from 'features/todos/TodoItemGroup';

const TodoDashboard = () => (
  <PageContainer>
    <TodoForm />
    <TodoItemGroup />
  </PageContainer>
);

export default TodoDashboard;
