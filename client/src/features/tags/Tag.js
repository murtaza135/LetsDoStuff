import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Tag.styles';

const Tag = ({ children, onDelete, $small }) => (
  <S.TagContainer>
    <S.TagText $small={$small}>{children}</S.TagText>
    {onDelete && <S.TagCloseIcon onClick={() => onDelete(children)} />}
  </S.TagContainer>
);

Tag.defaultProps = {
  onDelete: null,
  $small: false
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  $small: PropTypes.bool
};

export default Tag;
