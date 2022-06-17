import React from 'react';
import { PageContainer } from 'global-components/layout';
import TodoForm from 'features/todos/TodoForm';
import TodoItem from 'features/todos/TodoItem';

const TodoDashboard = () => (
  <PageContainer>
    <TodoForm />
    <TodoItem title="temp" />
    <TodoItem title="temp" />
  </PageContainer>
);

export default TodoDashboard;
