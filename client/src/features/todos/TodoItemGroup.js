import React, { useEffect, useState, useMemo, useRef } from 'react';
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
  const filteredTodos = useMemo(() => activePill.filterFn(todos), [activePill, todos]);
  const pillContainer = useRef(null);

  useEffect(() => {
    if (isError) {
      const message = error.data.message || 'Internal Server Error';
      setAlert({ message, variant: 'danger' });
    }
  }, [isError, error, setAlert]);

  const handlePillClick = (event, value, pill) => {
    event.target?.scrollIntoView({ inline: 'center', block: 'nearest' });
    setActivePill(pill);
  };

  const metaData = (
    <S.TodoMetaData>
      <S.TodoMetaDataItem>Todos: {filteredTodos.length}</S.TodoMetaDataItem>
      <S.PillContainer ref={pillContainer}>
        {pillData.map((pill) => (
          <Pill
            key={pill._id}
            value={pill._id}
            variant={pill.variant}
            active={pill._id === activePill._id}
            onClick={(event, value) => handlePillClick(event, value, pill)}
          >
            {pill.value}
          </Pill>
        ))}
      </S.PillContainer>
    </S.TodoMetaData>
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <S.TodoItemGroupContainer>
        {metaData}
        <Text $size="m" $color="secondary" $my="2rem" $noSelect>Could not load todos...</Text>
      </S.TodoItemGroupContainer>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <S.TodoItemGroupContainer>
        {metaData}
        <Text $size="m" $color="secondary" $my="2rem" $noSelect>You have no todos!</Text>
      </S.TodoItemGroupContainer>
    );
  }

  return (
    <S.TodoItemGroupContainer>
      {metaData}

      <S.TodoItems>
        {filteredTodos
          .map(({ _id, title, description, deadlineDate, important, complete, tags }) => (
            <TodoItem
              key={_id}
              _id={_id}
              title={title}
              description={description}
              deadlineDate={deadlineDate}
              important={important}
              complete={complete}
              tags={tags}
            />
          ))}
      </S.TodoItems>
    </S.TodoItemGroupContainer>
  );
};

export default TodoItemGroup;
