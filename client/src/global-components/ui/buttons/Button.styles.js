import styled from 'styled-components';
import getButtonElement from './Button.elements';
import colors, { getValidColor } from './Button.colors';
import sizes, { getValidSize } from './Button.sizes';

// @props as || color || size || stretch || rounded || bold
const Button = styled.button.attrs((props) => ({
  ...props,
  as: getButtonElement(props.to, props.href),
  color: getValidColor(props.color),
  size: getValidSize(props.size),
  stretch: props.stretch,
  rounded: props.rounded,
  bold: props.bold
}))`
  ${({ color }) => colors[color]};
  ${({ size }) => sizes[size]};

  width: ${({ stretch }) => (stretch && '100%')};
  border: none;
  border-radius: ${({ rounded }) => (rounded ? '100rem' : '5px')};
  font-weight: ${({ bold }) => (bold && 'bold')};
  transition: all 0.3s ease;
  cursor: pointer;

  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  writing-mode: horizontal-tb !important;

  &:hover {
    opacity: 0.75;
  }
`;

export default Button;
