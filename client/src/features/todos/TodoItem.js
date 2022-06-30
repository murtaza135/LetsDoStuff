import React, { useContext, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import Tag from 'features/tags/Tag';
import { FiEdit } from 'react-icons/fi';
import { ImBin } from 'react-icons/im';
import { CgCheckO } from 'react-icons/cg';
import { FaUndoAlt } from 'react-icons/fa';
import { primaryTheme as theme } from 'constants';
import TodoFormContext from './TodoFormContext';
import * as S from './TodoItem.styles';
import {
  useUpdateTodoToCompleteMutation,
  useUpdateTodoToIncompleteMutation,
  useDeleteTodoMutation
} from './todos.apislice';
import TodoDate from './TodoDate';

const TodoItem = ({ _id, title, description, deadlineDate, tags, important, complete }) => {
  const todoItemRef = useRef(null);
  const [updateTodoToComplete] = useUpdateTodoToCompleteMutation();
  const [updateTodoToIncomplete] = useUpdateTodoToIncompleteMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const { editTodo } = useContext(TodoFormContext);

  return (
    <S.TodoItemContainer
      ref={todoItemRef}
      tabIndex="0"
      $important={important}
      $complete={complete}
    >
      <S.TodoDataContainer>
        <S.TodoItemTitle>{title}</S.TodoItemTitle>
        {deadlineDate && <TodoDate date={deadlineDate} />}
      </S.TodoDataContainer>

      {tags.length > 0 && (
        <S.TagsContainer>
          {tags.map((tag) => <Tag key={tag} $small>{tag}</Tag>)}
        </S.TagsContainer>
      )}

      {important && !complete && <S.TodoItemImportant />}
      {complete && <S.TodoItemComplete />}

      <S.IconsContainer>
        {!complete && (
          <S.Icon
            element={CgCheckO}
            $size="1.2rem"
            $color={theme.success}
            onClick={() => updateTodoToComplete({ _id })}
          />
        )}
        {complete && (
          <S.Icon
            element={FaUndoAlt}
            $color={theme.medium}
            onClick={() => updateTodoToIncomplete({ _id })}
          />
        )}
        <S.Icon
          element={FiEdit}
          $color={theme.warning}
          onClick={() => (editTodo(
            { _id, title, description, deadlineDate, tags, important },
            todoItemRef
          ))}
        />
        <S.Icon
          element={ImBin}
          $color={theme.danger}
          onClick={() => deleteTodoMutation({ _id })}
        />
      </S.IconsContainer>
    </S.TodoItemContainer>
  );
};

TodoItem.defaultProps = {
  description: '',
  deadlineDate: null,
  tags: [],
  important: false,
  complete: false
};

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  deadlineDate: PropTypes.instanceOf(Date),
  tags: PropTypes.arrayOf(PropTypes.string),
  important: PropTypes.bool,
  complete: PropTypes.bool
};

export default memo(TodoItem);
