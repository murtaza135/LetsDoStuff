import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { capitalizeFirstLetter } from 'utils/string.utils';
import * as S from './TagsInput.styles';
import Tag from './Tag';

const TagsInput = React.forwardRef(({ name, placeholder }, tagInputRef) => {
  const formik = useFormikContext();
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = (event) => {
    if (event.key === 'Enter') {
      const newTag = event.target.value.toLowerCase();

      const doesTagAlreadyExist = (
        formik.values.tags
          .map((tag) => tag.toLowerCase())
          .includes(newTag)
      );

      if (!doesTagAlreadyExist && newTag !== '') {
        formik.setFieldValue(
          name,
          [...formik.values.tags, capitalizeFirstLetter(newTag)],
        );
      }

      setInputValue('');
    }
  };

  const handleDeleteTag = (oldTag) => {
    formik.setFieldValue(name, formik.values.tags.filter((tag) => tag !== oldTag));
  };

  return (
    <S.TagsContainer
      tabIndex="0"
      onFocus={() => tagInputRef.current.focus()}
      onBlur={() => formik.setFieldTouched(name)}
    >
      {formik.values.tags.map((tag) => <Tag key={tag} onDelete={handleDeleteTag}>{tag}</Tag>)}

      <S.TagsInnerInput
        ref={tagInputRef}
        name={`${name}InnerInput`}
        type="text"
        autoComplete="off"
        value={inputValue}
        placeholder={placeholder}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyUp={handleAddTag}
      />
    </S.TagsContainer>
  );
});

TagsInput.defaultProps = {
  placeholder: ''
};

TagsInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default TagsInput;
