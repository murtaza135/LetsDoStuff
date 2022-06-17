import React from 'react';
import PropTypes from 'prop-types';
import Tag from 'features/tags/Tag';
import * as S from './TodoItem.styles';

const TodoItem = ({ title, description, deadlineDate, tags, important }) => (
  <S.TodoItemContainer>
    <S.TodoItemTitle>Hello World</S.TodoItemTitle>
    <S.TodoItemDate>01/01/1990</S.TodoItemDate>
    <S.TodoItemDescription />
    <S.TagsContainer>
      <Tag small>Tag1</Tag>
      <Tag small>Tag2</Tag>
      <Tag small>Tag3</Tag>
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
