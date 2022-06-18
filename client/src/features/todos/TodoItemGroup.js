import React from 'react';
import TodoItem from './TodoItem';
import * as S from './TodoItemGroup.styles';

const TodoItemGroup = () => (
  <S.TodoItemGroupContainer>
    <S.TodoMetaData>
      <span>Todos: 4</span>
      <span>Important: 3</span>
    </S.TodoMetaData>

    <S.TodoItems>
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
      <TodoItem
        title="Hello World"
        deadlineDate={new Date()}
        tags={['Hello', 'Bye', 'Yes']}
        important
      />
    </S.TodoItems>
  </S.TodoItemGroupContainer>
);

export default TodoItemGroup;
