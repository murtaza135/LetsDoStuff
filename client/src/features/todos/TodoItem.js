import React from 'react';
import PropTypes from 'prop-types';
import Tag from 'features/tags/Tag';
import { FaTimes } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import * as S from './TodoItem.styles';

// eslint-disable-next-line no-unused-vars
const TodoItem = ({ title, description, deadlineDate, tags, important }) => (
  <S.TodoItemContainer>
    {important && <S.TodoItemImportant />}
    <S.IconsContainer>
      <S.Icon element={FiEdit} />
      <S.Icon element={FaTimes} />
    </S.IconsContainer>
    <S.TodoItemTitle>{title}</S.TodoItemTitle>
    <S.TodoItemDate>{deadlineDate?.toDateString().substring(4)}</S.TodoItemDate>
    <S.TodoItemDescription />
    <S.TagsContainer>
      {tags.map((tag) => <Tag key={tag} small>{tag}</Tag>)}
    </S.TagsContainer>
  </S.TodoItemContainer>
);

TodoItem.defaultProps = {
  description: '',
  deadlineDate: null,
  tags: [],
  important: false
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  deadlineDate: PropTypes.instanceOf(Date),
  tags: PropTypes.arrayOf(PropTypes.string),
  important: PropTypes.bool,
};

export default TodoItem;
