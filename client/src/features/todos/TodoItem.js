import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Tag from 'features/tags/Tag';
import { FiEdit } from 'react-icons/fi';
import { ImBin } from 'react-icons/im';
import { CgCheckO } from 'react-icons/cg';
import { primaryTheme as theme } from 'constants';
import TodoFormContext from './TodoFormContext';
import * as S from './TodoItem.styles';
import { useUpdateTodoToCompleteMutation, useDeleteTodoMutation } from './todos.apislice';

// TODO create function for parsing date ensuring exceptions are caught
const TodoItem = ({ _id, title, description, deadlineDate, tags, important }) => {
  const todoItemRef = useRef(null);
  const deadlineDateParsed = deadlineDate ? new Date(deadlineDate) : null;
  const [updateTodoToComplete] = useUpdateTodoToCompleteMutation();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const { editTodo } = useContext(TodoFormContext);

  return (
    <S.TodoItemContainer ref={todoItemRef} tabIndex="0" $important={important}>
      <S.TodoDataContainer>
        <S.TodoItemTitle>{title}</S.TodoItemTitle>
        {deadlineDateParsed && (
          <S.TodoItemDate>{deadlineDateParsed?.toDateString().substring(4)}</S.TodoItemDate>
        )}
      </S.TodoDataContainer>

      {tags.length > 0 && (
        <S.TagsContainer>
          {tags.map(({ value, _id: tagId }) => <Tag key={tagId} $small>{value}</Tag>)}
        </S.TagsContainer>
      )}

      {important && <S.TodoItemImportant />}

      <S.IconsContainer>
        <S.Icon
          element={CgCheckO}
          $size="1.2rem"
          $color={theme.success}
          onClick={() => updateTodoToComplete({ _id })}
        />
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
  important: false
};

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  deadlineDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]),
  tags: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    _id: PropTypes.string
  })),
  important: PropTypes.bool,
};

export default TodoItem;
