import styled from 'styled-components';
import TextBase from './TextBase.styles';

// @props $size || $alignment || $color || $stretch || $bold || $italic || $underline
const BigTitle = styled(TextBase).attrs((props) => ({
  ...props,
  as: 'h1',
  $size: props.$size || 'xl',
  $alignment: props.$alignment || 'center',
  $color: props.$color || 'dark',
}))``;

export default BigTitle;
