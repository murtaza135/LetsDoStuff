import styled from 'styled-components';
import TextBase from './TextBase.styles';

// @props $size || $alignment || $color || $stretch || $bold || $italic || $underline
const Subtitle = styled(TextBase).attrs((props) => ({
  ...props,
  as: 'h2',
  $size: props.$size || 'm',
  $alignment: props.$alignment || 'center',
  $color: props.$color || 'dark',
}))``;

export default Subtitle;
