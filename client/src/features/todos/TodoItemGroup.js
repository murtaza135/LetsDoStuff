import React from 'react';
import { Spinner } from 'global-components/ui';
import TodoItem from './TodoItem';
import * as S from './TodoItemGroup.styles';
import { useGetAllTodosQuery } from './todos.apislice';

const TodoItemGroup = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetAllTodosQuery();
  const todos = data?.data;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Could not load todos...</p>;
  }

  return (
    <S.TodoItemGroupContainer>
      <S.TodoMetaData>
        <span>Todos: {todos.length}</span>
        <span>
          Important: {todos.reduce((count, todo) => (todo.important ? count + 1 : count), 0)}
        </span>
      </S.TodoMetaData>

      <S.TodoItems>
        {todos.map(({ _id: id, title, deadlineDate, important, tags }) => (
          <TodoItem
            key={id}
            title={title}
            deadlineDate={new Date(deadlineDate)}
            important={important}
            tags={tags}
          />
        ))}
      </S.TodoItems>
    </S.TodoItemGroupContainer>
  );
};

export default TodoItemGroup;
