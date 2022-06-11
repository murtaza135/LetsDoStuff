import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TagsInput.styles';

const Tag = ({ children, onDelete }) => (
  <S.TagContainer>
    <S.Tag>{children}</S.Tag>
    <S.TagCloseIcon onClick={() => onDelete(children)} />
  </S.TagContainer>
);

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Tag;
