import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tag.styles';

const Tag = ({ children, onDelete }) => (
  <S.TagContainer>
    <S.TagText>{children}</S.TagText>
    <S.TagCloseIcon onClick={() => onDelete(children)} />
  </S.TagContainer>
);

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Tag;
