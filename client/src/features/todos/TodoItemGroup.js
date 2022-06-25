import React from 'react';
import { Spinner, Text } from 'global-components/ui';
import TodoItem from './TodoItem';
import * as S from './TodoItemGroup.styles';
import { useCustomGetAllTodosQuery } from './todos.hooks';

const TodoItemGroup = () => {
  const { data: todos, isLoading, isError } = useCustomGetAllTodosQuery();
  console.log(todos);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <S.TodoItemGroupContainer>
        <Text $size="m" $color="secondary" $my="4rem" $noSelect>Could not load todos...</Text>
      </S.TodoItemGroupContainer>
    );
  }

  if (todos.length === 0) {
    return (
      <S.TodoItemGroupContainer>
        <Text $size="m" $color="secondary" $my="4rem" $noSelect>You have no todos!</Text>
      </S.TodoItemGroupContainer>
    );
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
        {todos.map(({ _id, title, deadlineDate, important, tags }) => (
          <TodoItem
            key={_id}
            title={title}
            deadlineDate={deadlineDate}
            important={important}
            tags={tags}
          />
        ))}
      </S.TodoItems>
    </S.TodoItemGroupContainer>
  );
};

export default TodoItemGroup;
