/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import * as S from './TagsInput.styles';
import Tag from './Tag';

const TagsInput = React.forwardRef(({ tags, onAddTag, onDeleteTag }, tagInputRef) => {
  const [tagValue, setTagValue] = useState('');

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      onAddTag(event.target.value);
      setTagValue('');
    }
  };

  return (
    <S.TagsContainer
      tabIndex="0"
      onFocus={() => tagInputRef.current.focus()}
    >
      {tags.map((tag) => <Tag key={tag} onDelete={onDeleteTag}>{tag}</Tag>)}

      <S.TagsInnerInput
        ref={tagInputRef}
        name="tagsField"
        type="text"
        autoComplete="off"
        value={tagValue}
        onChange={(event) => setTagValue(event.target.value)}
        onKeyUp={handleKeyUp}
      />
    </S.TagsContainer>
  );
});

export default TagsInput;
