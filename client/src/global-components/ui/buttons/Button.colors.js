import { css } from 'styled-components';
import { primaryTheme as theme } from 'constants';

const getForegroundColor = (color) => {
  if (!color) {
    return theme.light;
  }

  const hexColor = color.substring(1);
  return (parseInt(hexColor, 16) > 0xffffff / 2) ? theme.dark : theme.light;
};

const colorCSS = (backgroundColor, foregroundColor) => css`
  background-color: ${theme[backgroundColor]};
  color: ${theme[foregroundColor] || getForegroundColor(theme[backgroundColor])};
`;

const colors = {
  primary: colorCSS('primary', 'light'),
  secondary: colorCSS('secondary'),
  tertiary: colorCSS('tertiary'),
  dark: colorCSS('dark'),
  medium: colorCSS('medium'),
  light: colorCSS('light'),
  danger: colorCSS('danger', 'light'),
  warning: colorCSS('warning'),
  success: colorCSS('success'),
};

export const getValidColor = (colorToValidate) => {
  const isColorValid = Object.keys(colors).some((color) => (
    color === colorToValidate
  ));

  return isColorValid ? colorToValidate : 'primary';
};

export default colors;
