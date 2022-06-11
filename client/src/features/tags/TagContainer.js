import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './TagsInput.styles';

const TagContainer = ({ onFocus, onBlur }) => {
  const hello = 'hello';
  const [focus, setFocus] = useState(false);

  return <S.TagsContainer />;
};

TagContainer.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default TagContainer;
