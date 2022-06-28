import React, { useEffect, useState } from 'react';
import { Spinner, Text, Pill } from 'global-components/ui';
import { useSetAlert } from 'features/alert/alert.hooks';
import TodoItem from './TodoItem';
import * as S from './TodoItemGroup.styles';
import { useCustomGetAllTodosQuery } from './todos.hooks';
import { pillData } from './TodoItemGroup.data';

const TodoItemGroup = () => {
  const { data: todos, isLoading, isError, error } = useCustomGetAllTodosQuery();
  const setAlert = useSetAlert();
  const [activePill, setActivePill] = useState(pillData[1]);
  const filteredTodos = activePill.filterFn(todos);

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

  if (filteredTodos.length === 0) {
    return (
      <S.TodoItemGroupContainer>
        <Text $size="m" $color="secondary" $my="4rem" $noSelect>You have no todos!</Text>
      </S.TodoItemGroupContainer>
    );
  }

  return (
    <S.TodoItemGroupContainer>
      <S.TodoMetaData>
        <S.TodoMetaDataItem>Todos: {filteredTodos.length}</S.TodoMetaDataItem>
        <S.PillContainer>
          {pillData.map((pill) => (
            <Pill
              key={pill._id}
              value={pill._id}
              variant={pill.variant}
              active={pill._id === activePill._id}
              onClick={() => setActivePill(pill)}
            >
              {pill.value}
            </Pill>
          ))}
        </S.PillContainer>
      </S.TodoMetaData>

      <S.TodoItems>
        {filteredTodos
          .map(({ _id, title, description, deadlineDate, important, tags }) => (
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
