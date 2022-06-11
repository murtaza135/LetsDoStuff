import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TodoForm.styles';

const TagsInput = (props) => (
  <S.TagsContainer>
    <S.Tag>Hello</S.Tag>
    <S.Tag>Bye</S.Tag>
    <S.Tag>YESSS</S.Tag>
    <S.TagsField $width="4rem" />
  </S.TagsContainer>
);

TagsInput.propTypes = {};

export default TagsInput;
