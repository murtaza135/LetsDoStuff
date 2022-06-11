import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './TagsInput.styles';

const TagsInput = ({ ...props }) => {
  const [tagValue, setTagValue] = useState('');
  const tagsField = useRef(null);

  return (
    <S.TagsContainer
      tabIndex="0"
      onFocus={() => tagsField.current.focus()}
    >
      <S.Tag>Hello</S.Tag>
      <S.Tag>Bye</S.Tag>
      <S.Tag>YESSS</S.Tag>
      <S.TagsField
        ref={tagsField}
        $width="4rem"
        type="text"
        name="tagField"
        value={tagValue}
        onChange={(event) => setTagValue(event.target.value)}
      />
    </S.TagsContainer>
  );
};

TagsInput.propTypes = {};

export default TagsInput;
