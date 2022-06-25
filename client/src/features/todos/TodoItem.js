import React from 'react';
import PropTypes from 'prop-types';
import Tag from 'features/tags/Tag';
import { FiEdit } from 'react-icons/fi';
import { ImBin } from 'react-icons/im';
import { CgCheckO } from 'react-icons/cg';
import { primaryTheme as theme } from 'constants';
import * as S from './TodoItem.styles';

const TodoItem = ({ title, deadlineDate, tags, important }) => {
  const deadlineDateParsed = deadlineDate ? new Date(deadlineDate) : null;

  return (
    <S.TodoItemContainer $important={important}>
      <S.TodoDataContainer>
        <S.TodoItemTitle>{title}</S.TodoItemTitle>
        {deadlineDateParsed && (
          <S.TodoItemDate>{deadlineDateParsed?.toDateString().substring(4)}</S.TodoItemDate>
        )}
      </S.TodoDataContainer>

      {tags.length > 0 && (
        <S.TagsContainer>
          {tags.map((tag) => <Tag key={tag} $small>{tag}</Tag>)}
        </S.TagsContainer>
      )}

      {important && <S.TodoItemImportant />}

      <S.IconsContainer>
        <S.Icon element={CgCheckO} $size="1.2rem" $color={theme.success} />
        <S.Icon element={FiEdit} $color={theme.warning} />
        <S.Icon element={ImBin} $color={theme.danger} />
      </S.IconsContainer>
    </S.TodoItemContainer>
  );
};

TodoItem.defaultProps = {
  deadlineDate: null,
  tags: [],
  important: false
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  deadlineDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]),
  tags: PropTypes.arrayOf(PropTypes.string),
  important: PropTypes.bool,
};

export default TodoItem;
