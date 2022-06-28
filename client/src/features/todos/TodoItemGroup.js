import React, { useEffect } from 'react';
import { Spinner, Text, Pill } from 'global-components/ui';
import { useSetAlert } from 'features/alert/alert.hooks';
import TodoItem from './TodoItem';
import * as S from './TodoItemGroup.styles';
import { useCustomGetAllTodosQuery } from './todos.hooks';

const TodoItemGroup = () => {
  const { data: todos, isLoading, isError, error } = useCustomGetAllTodosQuery();
  const nonCompleteTodos = todos ? todos.filter(({ complete }) => !complete) : [];
  const setAlert = useSetAlert();

  useEffect(() => {
    if (isError) {
      const message = error.data.message || 'Internal Server Error';
      setAlert({ message, variant: 'danger' });
    }
  }, [isError, error, setAlert]);

  if (isLoading) {
    return <Spinner text="Loading todos..." />;
  }

  if (isError) {
    return (
      <S.TodoItemGroupContainer>
        <Text $size="m" $color="secondary" $my="4rem" $noSelect>Could not load todos...</Text>
      </S.TodoItemGroupContainer>
    );
  }

  if (nonCompleteTodos.length === 0) {
    return (
      <S.TodoItemGroupContainer>
        <Text $size="m" $color="secondary" $my="4rem" $noSelect>You have no todos!</Text>
      </S.TodoItemGroupContainer>
    );
  }

  return (
    <S.TodoItemGroupContainer>
      <S.TodoMetaData>
        <S.TodoMetaDataItem>Todos: {nonCompleteTodos.length}</S.TodoMetaDataItem>
        <S.PillContainer>
          <Pill value="All1" active>All2</Pill>
          <Pill value="Hello">Hello</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
          <Pill>Bye</Pill>
        </S.PillContainer>
      </S.TodoMetaData>

      <S.TodoItems>
        {nonCompleteTodos.map(({ _id, title, description, deadlineDate, important, tags }) => (
          <TodoItem
            key={_id}
            _id={_id}
            title={title}
            description={description}
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
