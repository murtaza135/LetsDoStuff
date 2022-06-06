import styled from 'styled-components';
import { primaryTheme as theme } from 'constants';
import variants, { getValidVariant } from './Text.variants';

// @props variant || color || stretch || bold || italic || underline
const Text = styled.p.attrs((props) => ({
  ...props,
  variant: getValidVariant(props.variant),
  color: props.color || 'light',
  stretch: props.stretch,
  bold: props.bold,
  italic: props.italic,
  underline: props.underline
}))`
  ${({ variant }) => variants[variant]};
  color: ${({ color }) => theme[color]};
  width: ${({ stretch }) => (stretch && '100%')};
  font-weight: ${({ bold }) => (bold && 'bold')};
  font-style: ${({ italic }) => (italic && 'italic')};
  text-decoration: ${({ underline }) => (underline && 'underline')};
`;

export default Text;
