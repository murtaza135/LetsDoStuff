import React, { useState, useRef } from 'react';
import * as S from './TagsInput.styles';
import Tag from './Tag';

const TagsInput = () => {
  const tagsField = useRef(null);
  const [tagValue, setTagValue] = useState('');
  const [tags, setTags] = useState(['Hello', 'Bye', 'Yes']);

  const addTag = (event) => {
    if (event.key === 'Enter') {
      if (!tags.includes(event.target.value)) {
        setTags([...tags, event.target.value]);
      }

      setTagValue('');
    }
  };

  const deleteTag = (tag) => {
    // TODO add validation
    const tagsCopy = [...tags];
    const tagIndex = tagsCopy.findIndex((element) => element === tag);

    if (tagIndex !== -1) {
      tagsCopy.splice(tagIndex, 1);
      setTags(tagsCopy);
    }
  };

  return (
    <S.TagsContainer
      tabIndex="0"
      onFocus={() => tagsField.current.focus()}
    >
      {tags.map((tag) => <Tag key={tag} onDelete={deleteTag}>{tag}</Tag>)}

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

export default TagsInput;
