import React, { useState } from 'react';
import { capitalizeFirstLetter } from 'utils/string.utils';
import * as S from './TagsInput.styles';
import Tag from './Tag';

const TagsInput = React.forwardRef((props, tagsFieldRef) => {
  const [tagValue, setTagValue] = useState('');
  const [tags, setTags] = useState(['Hello', 'Bye', 'Yes']);

  const addTag = (event) => {
    // TODO add validation
    if (event.key === 'Enter') {
      const value = event.target.value.toLowerCase();
      const doesTagAlreadyExist = !tags.map((tag) => tag.toLowerCase()).includes(value);

      if (doesTagAlreadyExist) {
        setTags([...tags, capitalizeFirstLetter(value)]);
      }

      setTagValue('');
    }
  };

  const deleteTag = (tag) => {
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
      onFocus={() => tagsFieldRef.current.focus()}
    >
      {tags.map((tag) => <Tag key={tag} onDelete={deleteTag}>{tag}</Tag>)}

      <S.TagsInnerInput
        ref={tagsFieldRef}
        name="tagsField"
        type="text"
        autoComplete="off"
        value={tagValue}
        onChange={(event) => setTagValue(event.target.value)}
        onKeyUp={addTag}
      />
    </S.TagsContainer>
  );
});

export default TagsInput;
