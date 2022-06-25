import styled from 'styled-components';
import { sizes, primaryTheme as theme } from 'constants';
import { spacerMixin } from 'global-components/layout';
import { noSelectMixin } from 'global-components/other';

// @props $size || $alignment || $color || $stretch || $bold || $italic || $underline || $noSelect
const TextBase = styled.p.attrs((props) => ({
  ...props,
  $size: props.$size,
  $alignment: props.$alignment,
  $color: props.$color,
  $stretch: props.$stretch,
  $bold: props.$bold,
  $italic: props.$italic,
  $underline: props.$underline
}))`
  ${spacerMixin};
  font-size: ${({ $size }) => (sizes[$size] || $size || sizes.s)};
  text-align: ${({ $alignment }) => ($alignment || 'left')};
  color: ${({ $color }) => (theme[$color] || $color || theme.dark)};
  width: ${({ $stretch }) => ($stretch && '100%')};
  font-weight: ${({ $bold }) => ($bold && 'bold')};
  font-style: ${({ $italic }) => ($italic && 'italic')};
  text-decoration: ${({ $underline }) => ($underline && 'underline')};
  ${({ $noSelect }) => ($noSelect && noSelectMixin)};
`;

export default TextBase;
