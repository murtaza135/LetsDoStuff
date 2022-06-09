import styled from 'styled-components';
import { sizes, primaryTheme as theme } from 'constants';

// @props size || alignment || color || stretch || bold || italic || underline
const TextBase = styled.p.attrs((props) => ({
  ...props,
  size: sizes[props.size] || props.size || sizes.s,
  alignment: props.alignment || 'left',
  color: theme[props.color] || props.color || theme.dark,
  stretch: props.stretch,
  bold: props.bold,
  italic: props.italic,
  underline: props.underline
}))`
  font-size: ${({ size }) => (size)};
  text-align: ${({ alignment }) => (alignment)};
  color: ${({ color }) => (color)};
  width: ${({ stretch }) => (stretch && '100%')};
  font-weight: ${({ bold }) => (bold && 'bold')};
  font-style: ${({ italic }) => (italic && 'italic')};
  text-decoration: ${({ underline }) => (underline && 'underline')};
`;

export default TextBase;
