/* eslint-disable max-len */
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
        title={`${"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into".substring(0, 100)}...`}
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
