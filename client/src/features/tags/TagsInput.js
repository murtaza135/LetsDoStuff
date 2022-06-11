import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import * as S from './TagsInput.styles';

const TagsInput = ({ ...props }) => {
  const [tagValue, setTagValue] = useState('');
  const tagsField = useRef(null);
  const [tags, setTags] = useState([]);

  const addTag = (event) => {
    if (event.key === 'Enter') {
      if (!tags.includes(event.target.value)) {
        setTags([...tags, event.target.value]);
      }

      setTagValue('');
    }
  };

  return (
    <S.TagsContainer
      tabIndex="0"
      onFocus={() => tagsField.current.focus()}
    >
      <S.Tag>Hello</S.Tag>
      <S.Tag>Bye</S.Tag>
      <S.Tag>YESSS</S.Tag>
      {tags.map((tag) => <S.Tag key={tag}>{tag}</S.Tag>)}
      <S.TagsField
        ref={tagsField}
        name="tagsField"
        type="text"
        value={tagValue}
        onChange={(event) => setTagValue(event.target.value)}
        onKeyUp={addTag}
      />
    </S.TagsContainer>
  );
};

TagsInput.propTypes = {};

export default TagsInput;
