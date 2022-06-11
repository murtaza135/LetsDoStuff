import React from 'react';
import { PageContainer } from 'global-components/layout';
import TodoForm from 'features/todos/TodoForm';

const TodoDashboard = () => (
  <PageContainer>
    <TodoForm />
  </PageContainer>
);

export default TodoDashboard;
