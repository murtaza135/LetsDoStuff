import React from 'react';
import { PageContainer } from 'global-components/layout';
import TodoForm from 'features/todos/TodoForm';
import TodoItem from 'features/todos/TodoItem';

const TodoDashboard = () => (
  <PageContainer>
    <TodoForm />
    <TodoItem
      title="Hello World"
      deadlineDate={new Date()}
      important
    />
    <TodoItem
      title="Hello World"
      deadlineDate={new Date()}
      tags={['Hello']}
    />
    <TodoItem
      title="Bye World"
      tags={['Hello', 'Bye']}
      important
    />
    <TodoItem
      title="Hello World"
      deadlineDate={new Date()}
      tags={['Hello', 'Bye', 'Yes']}
      important
    />
  </PageContainer>
);

export default TodoDashboard;
