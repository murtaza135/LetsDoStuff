import styled from 'styled-components';
import TextBase from './TextBase.styles';

// @props $size || $alignment || $color || $stretch || $bold || $italic || $underline
const Text = styled(TextBase).attrs((props) => ({
  ...props,
  $size: props.$size || 's',
  $alignment: props.$alignment || 'left',
  $color: props.$color || 'dark',
}))``;

export default Text;
